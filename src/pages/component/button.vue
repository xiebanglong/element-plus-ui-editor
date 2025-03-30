<template>
  <div class="button-editor">
    <h2>按钮编辑器</h2>
    <div>
      <el-button>默认按钮</el-button>
      <el-button size="large">大按钮</el-button>
      <el-button size="small">小按钮</el-button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.button-editor {
  padding: 20px;
}

.button-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}
</style>
