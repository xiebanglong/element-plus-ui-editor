<template>
  <div class="input-editor">
    <h2>输入框编辑器</h2>
    <div class="input-grid">
      <div class="input-item">
        <el-input v-model="input1" placeholder="请输入内容" />
        <span>基础输入框</span>
      </div>
      <div class="input-item">
        <el-input v-model="input2" placeholder="请输入内容" size="large" />
        <span>大尺寸输入框</span>
      </div>
      <div class="input-item">
        <el-input v-model="input3" placeholder="请输入内容" size="small" />
        <span>小尺寸输入框</span>
      </div>
      <div class="input-item">
        <el-input v-model="input4" placeholder="请输入内容" disabled />
        <span>禁用状态</span>
      </div>
      <div class="input-item">
        <el-input v-model="input5" placeholder="请输入内容" clearable />
        <span>可清空</span>
      </div>
      <div class="input-item">
        <el-input v-model="input6" placeholder="请输入内容" show-password />
        <span>密码输入框</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
const input5 = ref('');
const input6 = ref('');
</script>

<style scoped>
.input-editor {
  padding: 20px;
}

.input-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.input-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
