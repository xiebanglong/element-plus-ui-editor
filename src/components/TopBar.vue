<template>
  <div class="top-bar">
    <div class="left">
      <h1>UI Editor</h1>
    </div>
    <div class="right">
      <el-button type="primary" @click="handleExport">
        <el-icon><Download /></el-icon>
        导出配置
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download } from '@element-plus/icons-vue';
import { useStyleStore } from '../stores/style';

const styleStore = useStyleStore();

const handleExport = async () => {
  await styleStore.exportConfig();
};
</script>

<style scoped>
.top-bar {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.left h1 {
  margin: 0;
  font-size: 20px;
  color: #303133;
}

.right {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
