<template>
  <div class="border-editor">
    <h2>边框编辑器</h2>
    <div class="border-grid">
      <div class="border-item">
        <div
          class="border-preview"
          style="border: var(--el-border-width) var(--el-border-style) var(--el-border-color)"
        >
          基础边框
        </div>
        <span>基础边框</span>
      </div>
      <div class="border-item">
        <div
          class="border-preview"
          style="border: var(--el-border-width) var(--el-border-style) var(--el-border-color-light)"
        >
          浅色边框
        </div>
        <span>浅色边框</span>
      </div>
      <div class="border-item">
        <div
          class="border-preview"
          style="border: var(--el-border-width) var(--el-border-style) var(--el-border-color-lighter)"
        >
          更浅边框
        </div>
        <span>更浅边框</span>
      </div>
      <div class="border-item">
        <div
          class="border-preview"
          style="border: var(--el-border-width) var(--el-border-style) var(--el-border-color-dark)"
        >
          深色边框
        </div>
        <span>深色边框</span>
      </div>
      <div class="border-item">
        <div
          class="border-preview"
          style="border: var(--el-border-width) var(--el-border-style) var(--el-border-color-darker)"
        >
          更深边框
        </div>
        <span>更深边框</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.border-editor {
  padding: 20px;
}

.border-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.border-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.border-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.border-preview {
  padding: 20px;
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-bg-color);
}
</style>
