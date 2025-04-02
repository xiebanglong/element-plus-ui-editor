<template>
  <TopBar></TopBar>
  <div class="style-editor">
    <!-- 左侧菜单 -->
    <div class="sidebar">
      <el-menu :default-active="activeMenu" class="sidebar-menu" @select="handleMenuSelect">
        <el-sub-menu index="token">
          <template #title>
            <span>基础样式</span>
          </template>
          <el-menu-item index="/token/color">颜色</el-menu-item>
          <el-menu-item index="/token/font">字体</el-menu-item>
          <el-menu-item index="/token/border">边框</el-menu-item>
          <el-menu-item index="/token/radius">圆角</el-menu-item>
          <el-menu-item index="/token/margin">边距</el-menu-item>
          <el-menu-item index="/token/size">尺寸</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="component">
          <template #title>
            <span>组件</span>
          </template>
          <el-menu-item index="/component/button">按钮</el-menu-item>
          <el-menu-item index="/component/input">输入框</el-menu-item>
          <el-menu-item index="/component/select">选择器</el-menu-item>
          <el-menu-item index="/component/form">表单</el-menu-item>
          <el-menu-item index="/component/table">表格</el-menu-item>
          <el-menu-item index="/component/dialog">对话框</el-menu-item>
          <el-menu-item index="/component/tabs">标签页</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <!-- 中间预览区 -->
    <div class="preview">
      <el-config-provider :locale="locale">
        <router-view></router-view>
      </el-config-provider>
    </div>
    <!-- 右侧编辑区 -->
    <div class="editor">
      <property-editor />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStyleStore } from '@/stores/style';
import PropertyEditor from '@/components/editors/PropertyEditor.vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import TopBar from '@/components/TopBar.vue';

const router = useRouter();
const route = useRoute();
const styleStore = useStyleStore();

const locale = ref(zhCn);

// 当前激活的菜单项
const activeMenu = computed(() => route.path);

// 处理菜单选择
const handleMenuSelect = (index: string) => {
  try {
    const paths = index.split('/');
    router.push(index);

    if (paths[1] === 'token') {
      styleStore.setActiveItem('token', paths[2]);
    } else if (paths[1] === 'component') {
      styleStore.setActiveItem('component', paths[2]);
    }
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  handleMenuSelect('/component/button');
});
</script>

<style scoped>
.style-editor {
  display: grid;
  grid-template-columns: 240px 1fr 300px;
  height: 100vh;
  margin-top: 60px;
}

.sidebar {
  border-right: 1px solid #dcdfe6;
  overflow-y: auto;
}

.preview {
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f7fa;
}

.editor {
  border-left: 1px solid #dcdfe6;
  overflow-y: auto;
}

.sidebar-menu {
  height: 100%;
  border-right: none;
}
</style>
