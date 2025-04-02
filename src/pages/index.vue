<template>
  <TopBar></TopBar>
  <div class="style-editor">
    <!-- 左侧菜单 -->
    <div class="sidebar">
      <el-menu :default-active="activeMenu" class="sidebar-menu" @select="handleMenuSelect">
        <el-sub-menu index="tokens">
          <template #title>
            <span>基础样式</span>
          </template>
          <el-menu-item index="/tokens/color">颜色</el-menu-item>
          <el-menu-item index="/tokens/font">字体</el-menu-item>
          <el-menu-item index="/tokens/border">边框</el-menu-item>
          <el-menu-item index="/tokens/radius">圆角</el-menu-item>
          <el-menu-item index="/tokens/margin">边距</el-menu-item>
          <el-menu-item index="/tokens/size">尺寸</el-menu-item>
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
      <property-editor :component="currentComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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

const currentComponent = ref('button');

// 处理菜单选择
const handleMenuSelect = index => {
  try {
    const paths = index.split('/');
    router.push(index);
    currentComponent.value = paths[2];
    if (currentComponent.value) {
      styleStore.setActiveComponent(currentComponent.value);
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
