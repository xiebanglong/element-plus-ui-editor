<template>
  <div class="property-editor">
    <el-tabs v-model="activeTab">
      <el-tab-pane
        v-for="(group, groupName) in groupedProperties"
        :key="groupName"
        :label="groupName"
        :name="groupName"
      >
        <div class="property-group">
          <div v-for="(items, title) in group" :key="title" class="property-section">
            <h3 class="section-title">{{ title }}</h3>
            <div class="property-items">
              <div v-for="item in items" :key="item.key" class="property-item">
                <div class="property-header">
                  <span class="property-desc">{{ item.desc }}</span>
                  <span v-if="!item.configurable">不可配置</span>
                </div>
                <el-select
                  v-if="item.configurable"
                  v-model="item.value"
                  :placeholder="'请选择' + item.desc"
                  filterable
                  allow-create
                  default-first-option
                  @change="value => handleValueChange(item, value)"
                >
                  <el-option
                    v-for="option in getOptions(item)"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
                <el-select v-else v-model="item.value" disabled :placeholder="item.desc">
                  <el-option
                    v-for="option in getOptions(item)"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStyleStore } from '../../stores/style';

const props = defineProps({
  component: {
    type: String,
    required: true
  }
});

const styleStore = useStyleStore();
const activeTab = ref('default');

// 根据 profile.sort 和 profile.title 对属性进行分组
const groupedProperties = computed(() => {
  const properties = styleStore.getComponentProperties(props.component);
  const groups = {};

  properties.forEach(prop => {
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

// 获取选项列表
const getOptions = item => {
  // 根据属性类型返回不同的选项
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

// 处理值变化
const handleValueChange = (item, value) => {
  styleStore.updateProperty(item.key, value);
};
</script>

<style scoped>
.property-editor {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.property-group {
  padding: 16px;
}

.property-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 14px;
  font-weight: 500;
  color: #606266;
  margin-bottom: 16px;
}

.property-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.property-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.property-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.property-desc {
  font-size: 13px;
  color: #606266;
}

:deep(.el-select) {
  width: 100%;
}
</style>
