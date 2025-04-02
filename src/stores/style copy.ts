import { defineStore } from 'pinia';
import templateJson from '../configs/template.json';
import { cloneDeep } from 'lodash-es';
import type { TemplateConfig, ComponentConfigItem } from '../types/template';

export const useStyleStore = defineStore('style', {
  state: () => ({
    properties: {} as Record<string, string>,
    activeComponent: null as string | null,
    activeSize: 'default' as string,
    templateConfig: cloneDeep(templateJson) as TemplateConfig
  }),

  getters: {
    // 获取指定组件的所有属性
    getComponentProperties:
      state =>
      (component: string): ComponentConfigItem[] => {
        const componentConfig = state.templateConfig.component[component]?.list || [];
        return componentConfig.map(prop => ({
          ...prop,
          value: state.properties[prop.key] || prop.value
        }));
      },

    // 获取指定组件的指定尺寸的属性
    getComponentPropertiesBySize:
      state =>
      (component: string, size: string): ComponentConfigItem[] => {
        const componentConfig = state.templateConfig.component[component]?.list || [];
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
    updateProperty(key: string, value: string): void {
      this.properties[key] = value;
      this.applyStyles();
    },

    // 设置当前组件
    setActiveComponent(component: string): void {
      this.activeComponent = component;
    },

    // 设置当前尺寸
    setActiveSize(size: string): void {
      this.activeSize = size;
    },

    // 应用样式
    applyStyles(): void {
      if (!this.activeComponent) return;

      const styleKey = `dynamic-${this.activeComponent}-styles`;
      // 移除旧的样式
      const oldStyle = document.getElementById(styleKey);
      if (oldStyle) {
        oldStyle.remove();
      }

      // 创建新的样式元素
      const style = document.createElement('style');
      style.id = styleKey;

      // 按类名分组属性
      const classGroups: Record<string, Record<string, string>> = {};
      const componentConfig = this.templateConfig.component[this.activeComponent];
      if (!componentConfig) return;

      componentConfig.list.forEach(item => {
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

        // 如果这个选择器还没有组，创建一个新的组
        if (!classGroups[selectors]) {
          classGroups[selectors] = {};
        }

        // 将属性添加到对应的组中
        if (Array.isArray(attrName)) {
          attrName.forEach(attr => {
            classGroups[selectors][attr] = item.value;
          });
        } else {
          classGroups[selectors][attrName] = item.value;
        }
      });

      // 生成CSS规则
      let cssRules = '';
      Object.entries(classGroups).forEach(([selector, properties]) => {
        cssRules += `${selector} {\n`;
        Object.entries(properties).forEach(([attr, value]) => {
          cssRules += `  ${attr}: ${value};\n`;
        });
        cssRules += '}\n';
      });
      console.log(cssRules);
      style.textContent = cssRules;
      document.head.appendChild(style);
    },

    // 查找属性配置
    findPropertyConfig(key: string): ComponentConfigItem | null {
      if (!this.activeComponent) return null;
      const component = this.templateConfig.component[this.activeComponent]?.list.find(item => {
        return item.key === key;
      });
      if (component) return component;
      return null;
    },

    // 重置所有属性为默认值
    resetProperties(): void {
      this.properties = {};
      this.applyStyles();
    }
  }
});
