// 组件样式属性类型
export interface ComponentStyle {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  boxShadow?: string;
  [key: string]: string | undefined;
}

// 组件配置类型
export interface ComponentConfig {
  name: string;
  component: string;
  sizes: ('large' | 'default' | 'small')[];
  props: Record<string, any>;
  children?: ComponentConfig[];
  styles?: {
    [key in 'large' | 'default' | 'small']?: ComponentStyle;
  };
}

// 主题配置类型
export interface ThemeConfig {
  components: {
    [key: string]: {
      [key in 'large' | 'default' | 'small']?: ComponentStyle;
    };
  };
  global?: {
    [key: string]: string;
  };
}
