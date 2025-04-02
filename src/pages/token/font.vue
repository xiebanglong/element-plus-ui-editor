<template>
  <div class="font-editor">
    <h2>字体编辑器</h2>
    <div class="font-grid">
      <div class="font-item">
        <div class="font-preview" style="font-size: var(--el-font-size-extra-large)">特大号字体</div>
        <span>特大号 (20px)</span>
      </div>
      <div class="font-item">
        <div class="font-preview" style="font-size: var(--el-font-size-large)">大号字体</div>
        <span>大号 (18px)</span>
      </div>
      <div class="font-item">
        <div class="font-preview" style="font-size: var(--el-font-size-medium)">中号字体</div>
        <span>中号 (16px)</span>
      </div>
      <div class="font-item">
        <div class="font-preview" style="font-size: var(--el-font-size-base)">基础字体</div>
        <span>基础 (14px)</span>
      </div>
      <div class="font-item">
        <div class="font-preview" style="font-size: var(--el-font-size-small)">小号字体</div>
        <span>小号 (13px)</span>
      </div>
      <div class="font-item">
        <div class="font-preview" style="font-size: var(--el-font-size-extra-small)">特小号字体</div>
        <span>特小号 (12px)</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.font-editor {
  padding: 20px;
}

.font-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.font-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.font-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.font-preview {
  padding: 20px;
  border: 1px solid var(--el-border-color-light);
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-bg-color);
}
</style>
