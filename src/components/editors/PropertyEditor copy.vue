<template>
  <div class="property-editor">
    <template v-if="currentItem">
      <div class="editor-header">
        <h2>{{ currentItem.name }} 属性</h2>
      </div>
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
                    @change="(value: string) => handleValueChange(item, value)"
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
    </template>
    <div v-else class="empty-state">请选择一个组件或 Token 进行编辑</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStyleStore } from '@/stores/style';
import type { ComponentConfigItem } from '@/types/template';

const styleStore = useStyleStore();
const activeTab = ref('default');

// 当前编辑项
const currentItem = computed(() => styleStore.currentItem);

// 获取分组后的属性
const groupedProperties = computed(() => {
  const groups = styleStore.groupedProperties;
  return groups;
});

// 获取选项列表
const getOptions = (item: ComponentConfigItem) => styleStore.getOptions(item);

// 处理值变化
const handleValueChange = (item: ComponentConfigItem, value: string) => {
  styleStore.updateProperty(item.key, value);
};
</script>

<style scoped>
.property-editor {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.editor-header {
  margin-bottom: 20px;
}

.editor-header h2 {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #303133;
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

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #909399;
  font-size: 14px;
}
</style>
