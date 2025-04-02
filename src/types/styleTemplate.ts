export interface StyleTemplate {
  tokens: StyleTemplateItem;
  component: StyleTemplateItem;
}

export interface StyleTemplateItem {
  [key: string]: StyleConfig[];
}

export interface StyleConfig {
  key: string;
  desc: string;
  value: string;
  configurable: boolean;
  profile: StyleProfile;
  type: Type;
}

export interface StyleProfile {
  group?: string;
  sort?: string;
  title?: string;
  attrName: string[] | string;
  className: string[] | string;
}

export enum Type {
  BorderRadius = 'borderRadius',
  Size = 'size',
  Spacing = 'spacing'
}
