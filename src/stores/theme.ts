import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ThemeConfig, ComponentConfig, ComponentStyle } from '../types/theme';

export const useThemeStore = defineStore('theme', () => {
  const themeConfig = ref<ThemeConfig>({
    components: {},
    global: {}
  });

  const currentComponent = ref<string>('');
  const currentSize = ref<'large' | 'default' | 'small'>('default');

  // 获取当前组件的样式
  const currentComponentStyle = computed(() => {
    if (!currentComponent.value) return null;
    return themeConfig.value.components[currentComponent.value]?.[currentSize.value] || {};
  });

  // 更新组件样式
  const updateComponentStyle = (component: string, size: 'large' | 'default' | 'small', style: ComponentStyle) => {
    if (!themeConfig.value.components[component]) {
      themeConfig.value.components[component] = {};
    }
    themeConfig.value.components[component][size] = {
      ...themeConfig.value.components[component][size],
      ...style
    };
  };

  // 生成CSS
  const generateCSS = () => {
    let css = '';

    // 添加全局样式
    if (themeConfig.value.global) {
      css += ':root {\n';
      Object.entries(themeConfig.value.global).forEach(([key, value]) => {
        css += `  ${key}: ${value};\n`;
      });
      css += '}\n\n';
    }

    // 添加组件样式
    Object.entries(themeConfig.value.components).forEach(([component, sizes]) => {
      Object.entries(sizes).forEach(([size, style]) => {
        const selector = `.${component}--${size}`;
        css += `${selector} {\n`;
        Object.entries(style).forEach(([property, value]) => {
          css += `  ${property}: ${value};\n`;
        });
        css += '}\n\n';
      });
    });

    return css;
  };

  // 复制CSS到剪贴板
  const copyCSS = async () => {
    const css = generateCSS();
    try {
      await navigator.clipboard.writeText(css);
      ElMessage.success('CSS已复制到剪贴板');
    } catch (err) {
      ElMessage.error('复制失败');
    }
  };

  return {
    themeConfig,
    currentComponent,
    currentSize,
    currentComponentStyle,
    updateComponentStyle,
    generateCSS,
    copyCSS
  };
});
