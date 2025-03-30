<template>
  <div class="dialog-editor">
    <h2>弹出框编辑器</h2>
    <div class="dialog-grid">
      <div class="dialog-item">
        <el-button type="primary" @click="dialogVisible1 = true">打开基础对话框</el-button>
        <span>基础对话框</span>
      </div>
      <div class="dialog-item">
        <el-button type="primary" @click="dialogVisible2 = true">打开自定义对话框</el-button>
        <span>自定义对话框</span>
      </div>
      <div class="dialog-item">
        <el-button type="primary" @click="dialogVisible3 = true">打开全屏对话框</el-button>
        <span>全屏对话框</span>
      </div>
    </div>

    <!-- 基础对话框 -->
    <el-dialog v-model="dialogVisible1" title="基础对话框">
      <span>这是一个基础对话框</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible1 = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 自定义对话框 -->
    <el-dialog v-model="dialogVisible2" title="自定义对话框" width="50%">
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible2 = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 全屏对话框 -->
    <el-dialog v-model="dialogVisible3" title="全屏对话框" fullscreen>
      <span>这是一个全屏对话框</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible3 = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible3 = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dialogVisible1 = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);

const form = ref({
  username: '',
  password: ''
});
</script>

<style scoped>
.dialog-editor {
  padding: 20px;
}

.dialog-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.dialog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.dialog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
