<template>
  <div class="table-editor">
    <h2>表格编辑器</h2>
    <div class="table-grid">
      <div class="table-item">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
        <span>基础表格</span>
      </div>
      <div class="table-item">
        <el-table :data="tableData" style="width: 100%" size="large">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
        <span>大尺寸表格</span>
      </div>
      <div class="table-item">
        <el-table :data="tableData" style="width: 100%" size="small">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
        <span>小尺寸表格</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  {
    date: '2024-01-01',
    name: '张三',
    address: '北京市朝阳区'
  },
  {
    date: '2024-01-02',
    name: '李四',
    address: '上海市浦东新区'
  },
  {
    date: '2024-01-03',
    name: '王五',
    address: '广州市天河区'
  }
]);
</script>

<style scoped>
.table-editor {
  padding: 20px;
}

.table-editor h2 {
  margin-bottom: 20px;
  font-size: var(--el-font-size-large);
}

.table-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.table-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
