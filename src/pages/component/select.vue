<template>
  <div class="select-editor">
    <h2>选择框编辑器</h2>
    <div class="select-grid">
      <div class="select-item">
        <el-select v-model="select1" placeholder="请选择">
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
          <el-option label="选项3" value="3" />
        </el-select>
        <span>基础选择框</span>
      </div>
      <div class="select-item">
        <el-select v-model="select2" placeholder="请选择" size="large">
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
          <el-option label="选项3" value="3" />
        </el-select>
        <span>大尺寸选择框</span>
      </div>
      <div class="select-item">
        <el-select v-model="select3" placeholder="请选择" size="small">
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
          <el-option label="选项3" value="3" />
        </el-select>
        <span>小尺寸选择框</span>
      </div>
      <div class="select-item">
        <el-select v-model="select4" placeholder="请选择" disabled>
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
          <el-option label="选项3" value="3" />
        </el-select>
        <span>禁用状态</span>
      </div>
      <div class="select-item">
        <el-select v-model="select5" placeholder="请选择" clearable>
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
          <el-option label="选项3" value="3" />
        </el-select>
        <span>可清空</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const select1 = ref('');
const select2 = ref('');
const select3 = ref('');
const select4 = ref('');
const select5 = ref('');
</script>

<style scoped>
.select-editor {
  padding: 20px;
}

.select-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.select-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.select-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
