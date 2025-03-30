<template>
  <div class="color-editor">
    <h2>颜色编辑器</h2>
    <div class="color-grid">
      <div class="color-item">
        <div class="color-block" style="background-color: var(--el-color-primary)"></div>
        <span>主色</span>
      </div>
      <div class="color-item">
        <div class="color-block" style="background-color: var(--el-color-success)"></div>
        <span>成功色</span>
      </div>
      <div class="color-item">
        <div class="color-block" style="background-color: var(--el-color-warning)"></div>
        <span>警告色</span>
      </div>
      <div class="color-item">
        <div class="color-block" style="background-color: var(--el-color-danger)"></div>
        <span>危险色</span>
      </div>
      <div class="color-item">
        <div class="color-block" style="background-color: var(--el-color-info)"></div>
        <span>信息色</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.color-editor {
  padding: 20px;
}

.color-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.color-block {
  width: 100px;
  height: 100px;
  border-radius: var(--el-border-radius-base);
  border: 1px solid var(--el-border-color-light);
}
</style>
