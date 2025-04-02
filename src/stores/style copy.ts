import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import templateConfigJson from '../configs/template.json';
import type { ComponentConfigItem, TemplateConfig } from '@/types/template';
import JSZip from 'jszip';
import { cloneDeep } from 'lodash-es';

export const useStyleStore = defineStore('style', () => {
  // 当前激活的编辑项（组件或token）
  const activeItem = ref<{ type: 'component' | 'token'; name: string } | null>({
    type: 'component',
    name: 'button'
  });
  const activeSize = ref<string>('default');
  const modifiedConfig = ref<Record<string, any>>({});
  const templateConfig = ref<TemplateConfig>(cloneDeep(templateConfigJson));

  // 获取当前激活的编辑项
  const currentItem = computed(() => {
    if (!activeItem.value) return null;
    const { type, name } = activeItem.value;
    return type === 'component'
      ? (templateConfig.value.component as Record<string, any>)[name]
      : (templateConfig.value.token as Record<string, any>)[name];
  });

  // 获取当前编辑项的所有属性
  const currentProperties = computed(() => {
    if (!currentItem.value) return [];
    const item = currentItem.value;
    return item.list || [];
  });

  // 根据 profile.sort 和 profile.title 对属性进行分组
  const groupedProperties = computed(() => {
    const groups: Record<string, Record<string, ComponentConfigItem[]>> = {};
    currentProperties.value.forEach(prop => {
      const { profile } = prop;
      if (!profile) return;

      // 按 sort 分组
      const groupName = profile.sort || 'default';
      if (!groups[groupName]) {
        groups[groupName] = {};
      }

      // 按 title 分组
      const title = profile.title || '其他';
      if (!groups[groupName][title]) {
        groups[groupName][title] = [];
      }

      groups[groupName][title].push(prop);
    });

    return groups;
  });

  // 设置当前激活的编辑项
  const setActiveItem = (type: 'component' | 'token', name: string) => {
    activeItem.value = { type, name };
  };

  // 设置当前激活的尺寸
  const setActiveSize = (size: 'default' | 'small' | 'large') => {
    activeSize.value = size;
  };

  // 更新属性值
  const updateProperty = (key: string, value: string) => {
    if (!activeItem.value) return;
    const { type, name } = activeItem.value;

    if (!modifiedConfig.value[type]) {
      modifiedConfig.value[type] = {};
    }
    if (!modifiedConfig.value[type]?.[name]) {
      modifiedConfig.value[type]![name] = {};
    }

    modifiedConfig.value[type]![name][key] = value;
    applyStyles();
  };

  // 获取选项列表
  const getOptions = (item: ComponentConfigItem) => {
    switch (item.type) {
      case 'size':
        return [
          { label: '32px', value: '32px' },
          { label: '40px', value: '40px' },
          { label: '48px', value: '48px' },
          { label: '56px', value: '56px' },
          { label: '64px', value: '64px' }
        ];
      case 'spacing':
        return [
          { label: '4px', value: '4px' },
          { label: '8px', value: '8px' },
          { label: '12px', value: '12px' },
          { label: '16px', value: '16px' },
          { label: '24px', value: '24px' }
        ];
      case 'borderRadius':
        return [
          { label: '0', value: '0' },
          { label: '4px', value: '4px' },
          { label: '8px', value: '8px' },
          { label: '12px', value: '12px' },
          { label: '16px', value: '16px' }
        ];
      default:
        return [{ label: item.value, value: item.value }];
    }
  };

  // 生成样式规则
  const generateStyleRules = (config: Record<string, any>, type: 'component' | 'token') => {
    const rules: Record<string, Record<string, string>> = {};

    Object.entries(config).forEach(([name, styles]) => {
      const itemConfig = (templateConfig.value[type] as Record<string, any>)[name];
      if (!itemConfig) return;

      // 按类名分组属性
      const classGroups: Record<string, Record<string, string>> = {};

      itemConfig.list.forEach((item: ComponentConfigItem) => {
        const changeValue = (styles as Record<string, string>)[item.key] || item.value;
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
            classGroups[selectors][attr] = changeValue;
          });
        } else {
          classGroups[selectors][attrName] = changeValue;
        }
      });

      // 合并到总规则中
      Object.entries(classGroups).forEach(([selector, properties]) => {
        if (!rules[selector]) {
          rules[selector] = {};
        }
        Object.assign(rules[selector], properties);
      });
    });

    return rules;
  };

  // 生成CSS内容
  const generateCssContent = () => {
    let cssContent = '';

    // 处理组件样式
    if (modifiedConfig.value.component) {
      const componentRules = generateStyleRules(modifiedConfig.value.component, 'component');
      Object.entries(componentRules).forEach(([selector, properties]) => {
        cssContent += `${selector} {\n`;
        Object.entries(properties).forEach(([attr, value]) => {
          cssContent += `  ${attr}: ${value};\n`;
        });
        cssContent += '}\n\n';
      });
    }

    // 处理token样式
    if (modifiedConfig.value.token) {
      const tokenRules = generateStyleRules(modifiedConfig.value.token, 'token');
      Object.entries(tokenRules).forEach(([selector, properties]) => {
        cssContent += `${selector} {\n`;
        Object.entries(properties).forEach(([attr, value]) => {
          cssContent += `  ${attr}: ${value};\n`;
        });
        cssContent += '}\n\n';
      });
    }

    return cssContent;
  };

  // 获取修改后的配置
  const getModifiedConfig = () => {
    return modifiedConfig.value;
  };

  // 应用样式
  const applyStyles = () => {
    // 应用组件样式
    if (activeItem.value && activeItem.value.type === 'component') {
      applyComponentStyles();
    }
    // 应用token样式
    if (activeItem.value && activeItem.value.type === 'token') {
      applyTokenStyles();
    }
  };

  // 应用组件样式
  const applyComponentStyles = () => {
    if (!activeItem.value || activeItem.value.type !== 'component') return;

    const styleKey = `dynamic-${activeItem.value.name}-styles`;
    // 移除旧的样式
    const oldStyle = document.getElementById(styleKey);
    if (oldStyle) {
      oldStyle.remove();
    }

    // 创建新的样式元素
    const style = document.createElement('style');
    style.id = styleKey;

    // 生成样式规则
    const rules = generateStyleRules(
      { [activeItem.value.name]: modifiedConfig.value.component?.[activeItem.value.name] || {} },
      'component'
    );

    // 生成CSS规则
    let cssRules = '';
    Object.entries(rules).forEach(([selector, properties]) => {
      cssRules += `${selector} {\n`;
      Object.entries(properties).forEach(([attr, value]) => {
        cssRules += `  ${attr}: ${value};\n`;
      });
      cssRules += '}\n';
    });
    style.textContent = cssRules;
    document.head.appendChild(style);
  };

  // 应用token样式
  const applyTokenStyles = () => {
    if (!activeItem.value || activeItem.value.type !== 'token') return;

    const styleKey = `dynamic-${activeItem.value.name}-styles`;
    // 移除旧的样式
    const oldStyle = document.getElementById(styleKey);
    if (oldStyle) {
      oldStyle.remove();
    }

    // 创建新的样式元素
    const style = document.createElement('style');
    style.id = styleKey;

    // 生成样式规则
    const rules = generateStyleRules(
      { [activeItem.value.name]: modifiedConfig.value.token?.[activeItem.value.name] || {} },
      'token'
    );

    // 生成CSS规则
    let cssRules = '';
    Object.entries(rules).forEach(([selector, properties]) => {
      cssRules += `${selector} {\n`;
      Object.entries(properties).forEach(([attr, value]) => {
        cssRules += `  ${attr}: ${value};\n`;
      });
      cssRules += '}\n';
    });
    style.textContent = cssRules;
    document.head.appendChild(style);
  };

  // 查找属性配置
  const findPropertyConfig = (key: string) => {
    if (activeItem.value && activeItem.value.type === 'component') {
      const component = templateConfig.value.component[activeItem.value.name].list.find(
        (item: ComponentConfigItem) => item.key === key
      );
      if (component) return component;
    }
    if (activeItem.value && activeItem.value.type === 'token') {
      const token = templateConfig.value.token[activeItem.value.name].list.find(
        (item: ComponentConfigItem) => item.key === key
      );
      if (token) return token;
    }
    return null;
  };

  // 重置所有属性为默认值
  const resetProperties = () => {
    modifiedConfig.value = {};
    applyStyles();
  };

  // 导出配置和样式
  const exportConfig = async () => {
    // 创建导出目录
    const exportDir = 'ui-editor-export';
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const exportPath = `${exportDir}-${timestamp}`;

    // 生成CSS内容
    const cssContent = generateCssContent();

    // 获取修改过的配置
    const config = getModifiedConfig();

    // 创建导出文件
    const files = [
      {
        name: 'styles.css',
        content: cssContent
      },
      {
        name: 'modified-config.json',
        content: JSON.stringify(config, null, 2)
      }
    ];

    // 创建下载链接
    const zip = new JSZip();
    files.forEach(file => {
      zip.file(file.name, file.content);
    });

    // 生成并下载zip文件
    const content = await zip.generateAsync({ type: 'blob' });
    const url = window.URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${exportPath}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return {
    activeItem,
    activeSize,
    currentItem,
    currentProperties,
    groupedProperties,
    setActiveItem,
    setActiveSize,
    updateProperty,
    getOptions,
    generateCssContent,
    getModifiedConfig,
    applyStyles,
    applyComponentStyles,
    applyTokenStyles,
    findPropertyConfig,
    resetProperties,
    exportConfig
  };
});
