// 基础配置接口
interface BaseConfig {
  // 样式配置唯一key
  key: string;
  // 样式配置描述
  desc: string;
  // 样式配置值
  value: string;
  // 样式配置是否可配置
  configurable: boolean;
  // 样式配置归属组件名称
  componentName: string;
  // 样式配置类型
  type: string;
}

// 配置文件接口
interface Profile {
  // 组件具体分组 如默认样式、不同尺寸展示
  group: string;
  // tabs分类 如 默认尺寸、大尺寸、小尺寸
  sort?: string;
  // 配置名
  title?: string;
  // 属性名如：width、height、padding、margin、border-radius等
  attrName: string | string[];
  // 样式生效的className
  className: string | string[];
}

// 组件配置项接口
interface ComponentConfigItem extends BaseConfig {
  // 组件配置文件
  profile: Profile;
}

// 组件配置接口
interface ComponentConfig {
  // 组件名称
  componentName: string;
  // 组件类型
  type: string;
  // 组件配置文件
  list: ComponentConfigItem[];
}

// Token配置项接口
interface TokenConfigItem extends BaseConfig {
  // 配置文件
  profile: {
    // 组件具体分组 如默认样式、不同尺寸展示
    group: string;
    // 属性名如：width、height、padding、margin、border-radius等
    attrName: string;
    // 样式生效的className
    className: string;
  };
}

// Token配置接口
interface TokenConfig {
  // 配置类型
  type: string;
  // 配置组件名称
  componentName: string;
  // 配置文件
  list: TokenConfigItem[];
}

// 完整配置接口
export interface TemplateConfig {
  // 基础样式配置
  token: {
    [key: string]: TokenConfig;
  };
  // 组件配置
  component: {
    [key: string]: ComponentConfig;
  };
}

// 导出所有类型
export type { BaseConfig, Profile, ComponentConfigItem, ComponentConfig, TokenConfigItem, TokenConfig };
