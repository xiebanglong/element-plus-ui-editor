import { defineStore } from 'pinia';
import templateJson from '../configs/template.json';
import { cloneDeep } from 'lodash-es';

export const useStyleStore = defineStore('style', {
  state: () => ({
    properties: {},
    activeComponent: null,
    activeSize: 'default',
    templateConfig: cloneDeep(templateJson)
  }),

  getters: {
    // 获取指定组件的所有属性
    getComponentProperties: state => component => {
      const componentConfig = state.templateConfig.component[component] || [];
      return componentConfig.map(prop => ({
        ...prop,
        value: state.properties[prop.key] || prop.value
      }));
    },

    // 获取指定组件的指定尺寸的属性
    getComponentPropertiesBySize: state => (component, size) => {
      const componentConfig = state.templateConfig.component[component] || [];
      return componentConfig
        .filter(prop => prop.profile?.sort === size)
        .map(prop => ({
          ...prop,
          value: state.properties[prop.key] || prop.value
        }));
    }
  },

  actions: {
    // 更新属性值
    updateProperty(key, value) {
      this.properties[key] = value;
      this.applyStyles();
    },

    // 设置当前组件
    setActiveComponent(component) {
      this.activeComponent = component;
    },

    // 设置当前尺寸
    setActiveSize(size) {
      this.activeSize = size;
    },

    // 应用样式
    applyStyles() {
      const styleKey = `dynamic-${this.activeComponent}-styles`;
      // 移除旧的样式
      const oldStyle = document.getElementById(styleKey);
      if (oldStyle) {
        oldStyle.remove();
      }

      // 创建新的样式元素
      const style = document.createElement('style');
      style.id = styleKey;

      // 生成样式规则
      let cssRules = '';
      this.templateConfig.component[this.activeComponent].forEach(item => {
        const changeValue = this.properties[item.key];
        if (changeValue) {
          item.value = changeValue;
        }
        const { profile } = item;
        if (!profile) return;
        const { className, attrName } = profile;
        if (!className || !attrName) return;

        // 处理多个类名
        const selectors = Array.isArray(className) ? className.join(', ') : className;
        cssRules += `${selectors} {\n  ${attrName}: ${item.value};\n}\n`;
      });
      console.log(cssRules, 'cssRules-----');
      style.textContent = cssRules;
      document.head.appendChild(style);
    },

    // 查找属性配置
    findPropertyConfig(key) {
      const component = this.templateConfig.component[this.activeComponent].find(item => {
        return item.key === key;
      });
      if (component) return component;
      return null;
    },

    // 重置所有属性为默认值
    resetProperties() {
      this.properties = {};
      this.applyStyles();
    }
  }
});
