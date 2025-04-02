<template>
  <div class="size-editor">
    <h2>尺寸编辑器</h2>
    <div class="size-grid">
      <div class="size-item">
        <div class="size-preview" style="width: var(--el-component-size-large); height: var(--el-component-size-large)">
          大尺寸
        </div>
        <span>大尺寸 (40px)</span>
      </div>
      <div class="size-item">
        <div class="size-preview" style="width: var(--el-component-size); height: var(--el-component-size)">
          默认尺寸
        </div>
        <span>默认尺寸 (32px)</span>
      </div>
      <div class="size-item">
        <div class="size-preview" style="width: var(--el-component-size-small); height: var(--el-component-size-small)">
          小尺寸
        </div>
        <span>小尺寸 (24px)</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.size-editor {
  padding: 20px;
}

.size-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.size-preview {
  border: 1px solid var(--el-border-color-light);
  background-color: var(--el-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--el-font-size-small);
}
</style>
