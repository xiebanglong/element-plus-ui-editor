<template>
  <div class="radius-editor">
    <h2>圆角编辑器</h2>
    <div class="radius-grid">
      <div class="radius-item">
        <div class="radius-preview" style="border-radius: var(--el-border-radius-base)">基础圆角</div>
        <span>基础圆角 (4px)</span>
      </div>
      <div class="radius-item">
        <div class="radius-preview" style="border-radius: var(--el-border-radius-small)">小圆角</div>
        <span>小圆角 (2px)</span>
      </div>
      <div class="radius-item">
        <div class="radius-preview" style="border-radius: var(--el-border-radius-round)">大圆角</div>
        <span>大圆角 (20px)</span>
      </div>
      <div class="radius-item">
        <div class="radius-preview" style="border-radius: var(--el-border-radius-circle)">圆形</div>
        <span>圆形 (100%)</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.radius-editor {
  padding: 20px;
}

.radius-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.radius-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.radius-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radius-preview {
  padding: 20px;
  border: 1px solid var(--el-border-color-light);
  background-color: var(--el-bg-color);
}
</style>
