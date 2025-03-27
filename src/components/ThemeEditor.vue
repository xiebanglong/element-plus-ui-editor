<script setup lang="ts">
import { ref, computed } from 'vue';
import { useThemeStore } from '../stores/theme';
import type { ComponentConfig } from '../types/theme';
import {
  ElButton,
  ElInput,
  ElInputNumber,
  ElSelect,
  ElOption,
  ElCascader,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElSwitch,
  ElSlider,
  ElTimePicker,
  ElDatePicker,
  ElColorPicker,
  ElTransfer,
  ElRate,
  ElUpload,
  ElForm,
  ElTable,
  ElTag,
  ElProgress,
  ElTree,
  ElPagination,
  ElBadge,
  ElAvatar,
  ElSkeleton,
  ElEmpty,
  ElDescriptions,
  ElResult,
  ElCalendar,
  ElImage,
  ElMenu,
  ElMenuItem,
  ElTabs,
  ElTabPane,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElSteps,
  ElStep,
  ElAlert,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopconfirm,
  ElDialog,
  ElDrawer,
  ElPopover,
  ElTooltip,
  ElCard,
  ElCollapse,
  ElCollapseItem,
  ElTimeline,
  ElTimelineItem,
  ElDivider,
  ElSpace,
  ElScrollbar,
  ElInfiniteScroll,
  ElAffix,
  ElBacktop
} from 'element-plus';

// 注册所有组件
const componentMap: Record<string, any> = {
  'el-button': ElButton,
  'el-input': ElInput,
  'el-input-number': ElInputNumber,
  'el-select': ElSelect,
  'el-option': ElOption,
  'el-cascader': ElCascader,
  'el-checkbox': ElCheckbox,
  'el-checkbox-group': ElCheckboxGroup,
  'el-radio': ElRadio,
  'el-radio-group': ElRadioGroup,
  'el-switch': ElSwitch,
  'el-slider': ElSlider,
  'el-time-picker': ElTimePicker,
  'el-date-picker': ElDatePicker,
  'el-color-picker': ElColorPicker,
  'el-transfer': ElTransfer,
  'el-rate': ElRate,
  'el-upload': ElUpload,
  'el-form': ElForm,
  'el-table': ElTable,
  'el-tag': ElTag,
  'el-progress': ElProgress,
  'el-tree': ElTree,
  'el-pagination': ElPagination,
  'el-badge': ElBadge,
  'el-avatar': ElAvatar,
  'el-skeleton': ElSkeleton,
  'el-empty': ElEmpty,
  'el-descriptions': ElDescriptions,
  'el-result': ElResult,
  'el-calendar': ElCalendar,
  'el-image': ElImage,
  'el-menu': ElMenu,
  'el-menu-item': ElMenuItem,
  'el-tabs': ElTabs,
  'el-tab-pane': ElTabPane,
  'el-breadcrumb': ElBreadcrumb,
  'el-breadcrumb-item': ElBreadcrumbItem,
  'el-steps': ElSteps,
  'el-step': ElStep,
  'el-alert': ElAlert,
  'el-loading': ElLoading,
  'el-message': ElMessage,
  'el-message-box': ElMessageBox,
  'el-notification': ElNotification,
  'el-popconfirm': ElPopconfirm,
  'el-dialog': ElDialog,
  'el-drawer': ElDrawer,
  'el-popover': ElPopover,
  'el-tooltip': ElTooltip,
  'el-card': ElCard,
  'el-collapse': ElCollapse,
  'el-collapse-item': ElCollapseItem,
  'el-timeline': ElTimeline,
  'el-timeline-item': ElTimelineItem,
  'el-divider': ElDivider,
  'el-space': ElSpace,
  'el-scrollbar': ElScrollbar,
  'el-infinite-scroll': ElInfiniteScroll,
  'el-affix': ElAffix,
  'el-backtop': ElBacktop
};

const themeStore = useThemeStore();

// 组件特定的样式属性配置
const componentStyleProperties: Record<string, Array<{ label: string; key: string; type: 'input' | 'color' }>> = {
  'el-button': [
    { label: '内边距', key: 'padding', type: 'input' },
    { label: '外边距', key: 'margin', type: 'input' },
    { label: '宽度', key: 'width', type: 'input' },
    { label: '高度', key: 'height', type: 'input' },
    { label: '字体大小', key: 'fontSize', type: 'input' },
    { label: '圆角', key: 'borderRadius', type: 'input' },
    { label: '背景色', key: 'backgroundColor', type: 'color' },
    { label: '文字颜色', key: 'color', type: 'color' },
    { label: '边框', key: 'border', type: 'input' },
    { label: '阴影', key: 'boxShadow', type: 'input' }
  ],
  'el-input': [
    { label: '宽度', key: 'width', type: 'input' },
    { label: '高度', key: 'height', type: 'input' },
    { label: '字体大小', key: 'fontSize', type: 'input' },
    { label: '圆角', key: 'borderRadius', type: 'input' },
    { label: '边框', key: 'border', type: 'input' },
    { label: '背景色', key: 'backgroundColor', type: 'color' },
    { label: '文字颜色', key: 'color', type: 'color' }
  ],
  'el-select': [
    { label: '宽度', key: 'width', type: 'input' },
    { label: '高度', key: 'height', type: 'input' },
    { label: '字体大小', key: 'fontSize', type: 'input' },
    { label: '圆角', key: 'borderRadius', type: 'input' },
    { label: '边框', key: 'border', type: 'input' },
    { label: '背景色', key: 'backgroundColor', type: 'color' },
    { label: '文字颜色', key: 'color', type: 'color' }
  ],
  'el-table': [
    { label: '宽度', key: 'width', type: 'input' },
    { label: '表头背景色', key: 'headerBackgroundColor', type: 'color' },
    { label: '单元格背景色', key: 'cellBackgroundColor', type: 'color' },
    { label: '边框颜色', key: 'borderColor', type: 'color' },
    { label: '文字颜色', key: 'color', type: 'color' }
  ],
  'el-dialog': [
    { label: '宽度', key: 'width', type: 'input' },
    { label: '标题栏背景色', key: 'headerBackgroundColor', type: 'color' },
    { label: '内容区背景色', key: 'contentBackgroundColor', type: 'color' },
    { label: '边框颜色', key: 'borderColor', type: 'color' }
  ],
  'el-card': [
    { label: '宽度', key: 'width', type: 'input' },
    { label: '标题栏背景色', key: 'headerBackgroundColor', type: 'color' },
    { label: '内容区背景色', key: 'contentBackgroundColor', type: 'color' },
    { label: '边框颜色', key: 'borderColor', type: 'color' },
    { label: '圆角', key: 'borderRadius', type: 'input' }
  ]
};

// 组件配置
const componentConfigs: ComponentConfig[] = [
  // 基础组件
  {
    name: 'Button',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: { type: 'primary' }
  },
  {
    name: 'Border',
    component: 'el-border',
    sizes: ['default'],
    props: {}
  },
  {
    name: 'Color',
    component: 'el-color',
    sizes: ['default'],
    props: {}
  },
  {
    name: 'Container',
    component: 'el-container',
    sizes: ['default'],
    props: {}
  },
  {
    name: 'Icon',
    component: 'el-icon',
    sizes: ['default'],
    props: {}
  },
  {
    name: 'Link',
    component: 'el-link',
    sizes: ['default'],
    props: { type: 'primary' }
  },
  {
    name: 'Text',
    component: 'el-text',
    sizes: ['default'],
    props: { type: 'primary' }
  },

  // 表单组件
  {
    name: 'Input',
    component: 'el-input',
    sizes: ['large', 'default', 'small'],
    props: { placeholder: '请输入内容' }
  },
  {
    name: 'InputNumber',
    component: 'el-input-number',
    sizes: ['large', 'default', 'small'],
    props: { min: 1, max: 10 }
  },
  {
    name: 'Select',
    component: 'el-select',
    sizes: ['large', 'default', 'small'],
    props: { placeholder: '请选择' },
    children: [
      {
        name: 'Option',
        component: 'el-option',
        sizes: ['default'],
        props: { label: '选项1', value: '1' }
      }
    ]
  },
  {
    name: 'Cascader',
    component: 'el-cascader',
    sizes: ['large', 'default', 'small'],
    props: { placeholder: '请选择' }
  },
  {
    name: 'Checkbox',
    component: 'el-checkbox',
    sizes: ['large', 'default', 'small'],
    props: { label: '选项1' }
  },
  {
    name: 'CheckboxGroup',
    component: 'el-checkbox-group',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'Checkbox',
        component: 'el-checkbox',
        sizes: ['default'],
        props: { label: '选项1' }
      }
    ]
  },
  {
    name: 'Radio',
    component: 'el-radio',
    sizes: ['large', 'default', 'small'],
    props: { label: '选项1' }
  },
  {
    name: 'RadioGroup',
    component: 'el-radio-group',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'Radio',
        component: 'el-radio',
        sizes: ['default'],
        props: { label: '选项1' }
      }
    ]
  },
  {
    name: 'Switch',
    component: 'el-switch',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Slider',
    component: 'el-slider',
    sizes: ['large', 'default', 'small'],
    props: { min: 0, max: 100 }
  },
  {
    name: 'TimePicker',
    component: 'el-time-picker',
    sizes: ['large', 'default', 'small'],
    props: { placeholder: '选择时间' }
  },
  {
    name: 'DatePicker',
    component: 'el-date-picker',
    sizes: ['large', 'default', 'small'],
    props: { type: 'date', placeholder: '选择日期' }
  },
  {
    name: 'DateTimePicker',
    component: 'el-datetime-picker',
    sizes: ['large', 'default', 'small'],
    props: { placeholder: '选择日期时间' }
  },
  {
    name: 'ColorPicker',
    component: 'el-color-picker',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Transfer',
    component: 'el-transfer',
    sizes: ['large', 'default', 'small'],
    props: { data: [] }
  },
  {
    name: 'Rate',
    component: 'el-rate',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Upload',
    component: 'el-upload',
    sizes: ['large', 'default', 'small'],
    props: { action: '#' }
  },
  {
    name: 'Form',
    component: 'el-form',
    sizes: ['large', 'default', 'small'],
    props: { labelWidth: '100px' }
  },

  // 数据展示组件
  {
    name: 'Table',
    component: 'el-table',
    sizes: ['large', 'default', 'small'],
    props: { data: [] }
  },
  {
    name: 'Tag',
    component: 'el-tag',
    sizes: ['large', 'default', 'small'],
    props: { type: 'success' }
  },
  {
    name: 'Progress',
    component: 'el-progress',
    sizes: ['large', 'default', 'small'],
    props: { percentage: 50 }
  },
  {
    name: 'Tree',
    component: 'el-tree',
    sizes: ['large', 'default', 'small'],
    props: { data: [] }
  },
  {
    name: 'Pagination',
    component: 'el-pagination',
    sizes: ['large', 'default', 'small'],
    props: { total: 100 }
  },
  {
    name: 'Badge',
    component: 'el-badge',
    sizes: ['large', 'default', 'small'],
    props: { value: '12' },
    children: [
      {
        name: 'Button',
        component: 'el-button',
        sizes: ['default'],
        props: {}
      }
    ]
  },
  {
    name: 'Avatar',
    component: 'el-avatar',
    sizes: ['large', 'default', 'small'],
    props: { src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' }
  },
  {
    name: 'Skeleton',
    component: 'el-skeleton',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Empty',
    component: 'el-empty',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Descriptions',
    component: 'el-descriptions',
    sizes: ['large', 'default', 'small'],
    props: { title: '描述列表' }
  },
  {
    name: 'Result',
    component: 'el-result',
    sizes: ['large', 'default', 'small'],
    props: { title: '成功' }
  },
  {
    name: 'Calendar',
    component: 'el-calendar',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Image',
    component: 'el-image',
    sizes: ['large', 'default', 'small'],
    props: { src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' }
  },

  // 导航组件
  {
    name: 'Menu',
    component: 'el-menu',
    sizes: ['large', 'default', 'small'],
    props: { mode: 'horizontal' },
    children: [
      {
        name: 'MenuItem',
        component: 'el-menu-item',
        sizes: ['default'],
        props: { index: '1' }
      }
    ]
  },
  {
    name: 'Tabs',
    component: 'el-tabs',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'TabPane',
        component: 'el-tab-pane',
        sizes: ['default'],
        props: { label: '标签1', name: '1' }
      }
    ]
  },
  {
    name: 'Breadcrumb',
    component: 'el-breadcrumb',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'BreadcrumbItem',
        component: 'el-breadcrumb-item',
        sizes: ['default'],
        props: { to: '/' }
      }
    ]
  },
  {
    name: 'Steps',
    component: 'el-steps',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'Step',
        component: 'el-step',
        sizes: ['default'],
        props: { title: '步骤1' }
      }
    ]
  },

  // 反馈组件
  {
    name: 'Alert',
    component: 'el-alert',
    sizes: ['large', 'default', 'small'],
    props: { title: '成功提示的文案', type: 'success' }
  },
  {
    name: 'Loading',
    component: 'el-loading',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Message',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: {
      type: 'primary',
      onClick: () => ElMessage.success('这是一条消息提示')
    },
    children: [
      {
        name: 'Text',
        component: 'el-text',
        sizes: ['default'],
        props: { content: '显示消息提示' }
      }
    ]
  },
  {
    name: 'MessageBox',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: {
      type: 'warning',
      onClick: () =>
        ElMessageBox.confirm('确认删除该条记录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
    },
    children: [
      {
        name: 'Text',
        component: 'el-text',
        sizes: ['default'],
        props: { content: '显示确认框' }
      }
    ]
  },
  {
    name: 'Notification',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: {
      type: 'success',
      onClick: () =>
        ElNotification({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        })
    },
    children: [
      {
        name: 'Text',
        component: 'el-text',
        sizes: ['default'],
        props: { content: '显示通知' }
      }
    ]
  },
  {
    name: 'Popconfirm',
    component: 'el-popconfirm',
    sizes: ['large', 'default', 'small'],
    props: { title: '确认删除该条记录吗？' }
  },

  // 其他组件
  {
    name: 'Dialog',
    component: 'el-dialog',
    sizes: ['large', 'default', 'small'],
    props: { title: '对话框' }
  },
  {
    name: 'Drawer',
    component: 'el-drawer',
    sizes: ['large', 'default', 'small'],
    props: { title: '抽屉' }
  },
  {
    name: 'Popover',
    component: 'el-popover',
    sizes: ['large', 'default', 'small'],
    props: { placement: 'top' }
  },
  {
    name: 'Tooltip',
    component: 'el-tooltip',
    sizes: ['large', 'default', 'small'],
    props: { content: '提示文字' }
  },
  {
    name: 'Card',
    component: 'el-card',
    sizes: ['large', 'default', 'small'],
    props: { header: '卡片标题' }
  },
  {
    name: 'Collapse',
    component: 'el-collapse',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'CollapseItem',
        component: 'el-collapse-item',
        sizes: ['default'],
        props: { title: '折叠面板1', name: '1' }
      }
    ]
  },
  {
    name: 'Timeline',
    component: 'el-timeline',
    sizes: ['large', 'default', 'small'],
    props: {},
    children: [
      {
        name: 'TimelineItem',
        component: 'el-timeline-item',
        sizes: ['default'],
        props: { timestamp: '2023-01-01' }
      }
    ]
  },
  {
    name: 'Divider',
    component: 'el-divider',
    sizes: ['large', 'default', 'small'],
    props: { contentPosition: 'center' }
  },
  {
    name: 'Space',
    component: 'el-space',
    sizes: ['large', 'default', 'small'],
    props: { wrap: true }
  },
  {
    name: 'Scrollbar',
    component: 'el-scrollbar',
    sizes: ['large', 'default', 'small'],
    props: { height: '200px' }
  },
  {
    name: 'InfiniteScroll',
    component: 'el-infinite-scroll',
    sizes: ['large', 'default', 'small'],
    props: {}
  },
  {
    name: 'Affix',
    component: 'el-affix',
    sizes: ['large', 'default', 'small'],
    props: { offset: 100 }
  },
  {
    name: 'Backtop',
    component: 'el-backtop',
    sizes: ['large', 'default', 'small'],
    props: { right: 20, bottom: 20 }
  }
];

// 当前选中的组件
const selectedComponent = ref<ComponentConfig | null>(null);

// 选择组件
const selectComponent = (component: ComponentConfig) => {
  selectedComponent.value = component;
  themeStore.currentComponent = component.component;
};

// 更新样式
const updateStyle = (key: string, value: string | null) => {
  if (!selectedComponent.value || !value) return;
  themeStore.updateComponentStyle(selectedComponent.value.component, themeStore.currentSize, { [key]: value });
};

// 获取当前组件样式
const getCurrentComponentStyle = computed(() => {
  return themeStore.currentComponentStyle || {};
});

// 生成预览样式
const getPreviewStyle = (component: ComponentConfig, size: 'large' | 'default' | 'small') => {
  return themeStore.themeConfig.components[component.component]?.[size] || {};
};

// 获取组件实例
const getComponent = (componentName: string) => {
  return componentMap[componentName];
};

// 获取当前组件的样式属性配置
const getCurrentStyleProperties = computed(() => {
  if (!selectedComponent.value) return [];
  return componentStyleProperties[selectedComponent.value.component] || [];
});
</script>

<template>
  <div class="theme-editor">
    <!-- 左侧预览区 -->
    <div class="preview-area">
      <div v-for="component in componentConfigs" :key="component.component" class="component-section">
        <h3>{{ component.name }}</h3>
        <div class="component-demo">
          <div v-for="size in component.sizes" :key="size" class="size-demo">
            <span class="size-label">{{ size }}</span>
            <component
              :is="getComponent(component.component)"
              v-bind="component.props"
              :size="size"
              :style="getPreviewStyle(component, size)"
              @click="selectComponent(component)"
            >
              <template v-if="component.children">
                <component
                  :is="getComponent(child.component)"
                  v-for="child in component.children"
                  :key="child.component"
                  v-bind="child.props"
                />
              </template>
            </component>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧编辑区 -->
    <div class="edit-area">
      <div class="edit-header">
        <h3>样式编辑</h3>
        <el-button type="primary" @click="themeStore.copyCSS">复制CSS</el-button>
      </div>

      <template v-if="selectedComponent">
        <div class="edit-content">
          <el-radio-group v-model="themeStore.currentSize" class="size-selector">
            <el-radio-button label="large">大尺寸</el-radio-button>
            <el-radio-button label="default">默认尺寸</el-radio-button>
            <el-radio-button label="small">小尺寸</el-radio-button>
          </el-radio-group>

          <div class="style-editor">
            <div v-for="prop in getCurrentStyleProperties" :key="prop.key" class="style-item">
              <span class="property-label">{{ prop.label }}</span>
              <template v-if="prop.type === 'input'">
                <el-input
                  v-model="getCurrentComponentStyle[prop.key]"
                  @input="(val: string | null) => updateStyle(prop.key, val)"
                />
              </template>
              <template v-else-if="prop.type === 'color'">
                <el-color-picker
                  v-model="getCurrentComponentStyle[prop.key]"
                  @change="(val: string | null) => updateStyle(prop.key, val)"
                />
              </template>
            </div>
          </div>
        </div>
      </template>
      <div v-else class="empty-tip">请选择要编辑的组件</div>
    </div>
  </div>
</template>

<style scoped>
.theme-editor {
  display: flex;
  height: 100vh;
}

.preview-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  border-right: 1px solid #dcdfe6;
}

.component-section {
  padding: 16px;
  border: 1px solid transparent;
  cursor: pointer;
}

.component-section:hover {
  border: 1px solid #000;
}

.component-section h3 {
  margin-bottom: 20px;
  color: #303133;
}

.component-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.size-demo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.size-label {
  min-width: 80px;
  color: #606266;
  font-size: 14px;
}

.edit-area {
  width: 400px;
  padding: 20px;
  background-color: #f5f7fa;
  overflow-y: auto;
}

.edit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.edit-header h3 {
  margin: 0;
  color: #303133;
}

.size-selector {
  margin-bottom: 20px;
}

.style-editor {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.style-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.property-label {
  min-width: 80px;
  color: #606266;
  font-size: 14px;
}

.empty-tip {
  text-align: center;
  color: #909399;
  font-size: 14px;
  margin-top: 40px;
}
</style>
