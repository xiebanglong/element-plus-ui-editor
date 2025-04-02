<template>
  <div class="margin-editor">
    <h2>边距编辑器</h2>
    <div class="margin-grid">
      <div class="margin-item">
        <div class="margin-preview" style="margin: 20px">
          <div class="margin-content">外边距</div>
        </div>
        <span>外边距 (20px)</span>
      </div>
      <div class="margin-item">
        <div class="margin-preview" style="padding: 20px">
          <div class="margin-content">内边距</div>
        </div>
        <span>内边距 (20px)</span>
      </div>
      <div class="margin-item">
        <div class="margin-preview" style="margin: 20px; padding: 20px">
          <div class="margin-content">内外边距</div>
        </div>
        <span>内外边距 (20px)</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.margin-editor {
  padding: 20px;
}

.margin-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.margin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.margin-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.margin-preview {
  border: 1px solid var(--el-border-color-light);
  background-color: var(--el-bg-color);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-content {
  background-color: var(--el-color-primary-light-9);
  padding: 10px;
  border-radius: var(--el-border-radius-base);
}
</style>
