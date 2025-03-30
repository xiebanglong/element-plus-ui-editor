<template>
  <div class="form-editor">
    <h2>表单编辑器</h2>
    <div class="form-grid">
      <div class="form-item">
        <el-form :model="form" label-width="100px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
          <el-form-item label="选择">
            <el-select v-model="form.select" placeholder="请选择">
              <el-option label="选项1" value="1" />
              <el-option label="选项2" value="2" />
              <el-option label="选项3" value="3" />
            </el-select>
          </el-form-item>
        </el-form>
        <span>基础表单</span>
      </div>
      <div class="form-item">
        <el-form :model="form2" label-width="100px" size="large">
          <el-form-item label="用户名">
            <el-input v-model="form2.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form2.password" type="password" />
          </el-form-item>
          <el-form-item label="选择">
            <el-select v-model="form2.select" placeholder="请选择">
              <el-option label="选项1" value="1" />
              <el-option label="选项2" value="2" />
              <el-option label="选项3" value="3" />
            </el-select>
          </el-form-item>
        </el-form>
        <span>大尺寸表单</span>
      </div>
      <div class="form-item">
        <el-form :model="form3" label-width="100px" size="small">
          <el-form-item label="用户名">
            <el-input v-model="form3.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form3.password" type="password" />
          </el-form-item>
          <el-form-item label="选择">
            <el-select v-model="form3.select" placeholder="请选择">
              <el-option label="选项1" value="1" />
              <el-option label="选项2" value="2" />
              <el-option label="选项3" value="3" />
            </el-select>
          </el-form-item>
        </el-form>
        <span>小尺寸表单</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  username: '',
  password: '',
  select: ''
});

const form2 = ref({
  username: '',
  password: '',
  select: ''
});

const form3 = ref({
  username: '',
  password: '',
  select: ''
});
</script>

<style scoped>
.form-editor {
  padding: 20px;
}

.form-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
