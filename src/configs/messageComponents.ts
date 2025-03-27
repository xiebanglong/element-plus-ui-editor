import type { ComponentConfig } from '../types/theme';
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';

// 处理弹窗组件的显示
export const showMessage = () => {
  ElMessage.success('这是一条消息提示');
};

export const showMessageBox = () => {
  ElMessageBox.confirm('确认删除该条记录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  });
};

export const showNotification = () => {
  ElNotification({
    title: '成功',
    message: '这是一条成功的提示消息',
    type: 'success'
  });
};

// 弹窗相关的组件配置
export const messageComponents: ComponentConfig[] = [
  {
    name: 'Message',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: { type: 'primary', onClick: showMessage },
    children: [
      {
        name: 'Text',
        component: 'el-text',
        sizes: ['default'],
        props: { content: '显示消息提示' }
      }
    ]
  },
  {
    name: 'MessageBox',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: { type: 'warning', onClick: showMessageBox },
    children: [
      {
        name: 'Text',
        component: 'el-text',
        sizes: ['default'],
        props: { content: '显示确认框' }
      }
    ]
  },
  {
    name: 'Notification',
    component: 'el-button',
    sizes: ['large', 'default', 'small'],
    props: { type: 'success', onClick: showNotification },
    children: [
      {
        name: 'Text',
        component: 'el-text',
        sizes: ['default'],
        props: { content: '显示通知' }
      }
    ]
  }
];
