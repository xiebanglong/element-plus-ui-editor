<template>
  <div class="tabs-editor">
    <h2>标签页编辑器</h2>
    <div class="tabs-grid">
      <div class="tabs-item">
        <el-tabs v-model="activeTab1">
          <el-tab-pane label="标签1" name="1">标签1内容</el-tab-pane>
          <el-tab-pane label="标签2" name="2">标签2内容</el-tab-pane>
          <el-tab-pane label="标签3" name="3">标签3内容</el-tab-pane>
        </el-tabs>
        <span>基础标签页</span>
      </div>
      <div class="tabs-item">
        <el-tabs v-model="activeTab2" type="card">
          <el-tab-pane label="标签1" name="1">标签1内容</el-tab-pane>
          <el-tab-pane label="标签2" name="2">标签2内容</el-tab-pane>
          <el-tab-pane label="标签3" name="3">标签3内容</el-tab-pane>
        </el-tabs>
        <span>卡片式标签页</span>
      </div>
      <div class="tabs-item">
        <el-tabs v-model="activeTab3" type="border-card">
          <el-tab-pane label="标签1" name="1">标签1内容</el-tab-pane>
          <el-tab-pane label="标签2" name="2">标签2内容</el-tab-pane>
          <el-tab-pane label="标签3" name="3">标签3内容</el-tab-pane>
        </el-tabs>
        <span>边框卡片式标签页</span>
      </div>
      <div class="tabs-item">
        <el-tabs v-model="activeTab4" size="large">
          <el-tab-pane label="标签1" name="1">标签1内容</el-tab-pane>
          <el-tab-pane label="标签2" name="2">标签2内容</el-tab-pane>
          <el-tab-pane label="标签3" name="3">标签3内容</el-tab-pane>
        </el-tabs>
        <span>大尺寸标签页</span>
      </div>
      <div class="tabs-item">
        <el-tabs v-model="activeTab5" size="small">
          <el-tab-pane label="标签1" name="1">标签1内容</el-tab-pane>
          <el-tab-pane label="标签2" name="2">标签2内容</el-tab-pane>
          <el-tab-pane label="标签3" name="3">标签3内容</el-tab-pane>
        </el-tabs>
        <span>小尺寸标签页</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab1 = ref('1');
const activeTab2 = ref('1');
const activeTab3 = ref('1');
const activeTab4 = ref('1');
const activeTab5 = ref('1');
</script>

<style scoped>
.tabs-editor {
  padding: 20px;
}

.tabs-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.tabs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.tabs-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
