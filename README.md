# xxx项目

背景：TODO。

访问入口：TODO

仓库地址：TODO

# 本地开发
```sh
# node.js ready
nvm use # 使用项目相同的nodejs版本
nvm install # 如果你的本地环境没有对应的node.js版本可以执行
# install deps
npm i -g pnpm # 安装pnpm，使用pnpm管理依赖
# with ni (recommend) npm install -g @antfu/ni
ni
# without ni
pnpm install
```

### 启动项目

```
npm run dev # 本地启动
npm run build # 本地打包
npm run eslint # 代码检查（需要node版本16 以上）

```
### 代理调试

本地启动默认走的是mock数据，如果需要走测试环境数据，需要修改vite.config.ts配置，具体改动：
1. localEnabled改成false。

```
{
 viteMockServe({
      mockPath: 'mock',
      localEnabled: isMock // 把localEnabled 值改成false
  }),
}
```
2. 设置target 为 具体要代理的环境。

```
const target = ''; // 改成要代理的环境地址
```

### eslint规则
使用eslint + prettier 来规范代码风格。本地vscode 需要安装 prettier 插件。
待提交的代码需要格式化且解决完eslint问题，否则无法通过提交前检查。

具体规则可以查看 .eslintrc.js 和 .prettierrc.js 配置。

### 提交规范
type为：['test', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'] 中的一种。
scope 可以为空。

```
git commit -m 'fix: 修复某某bug'
git commit -m 'feat: 开发某某功能'
```

具体可查看 .commitlintrc.js 配置。

使用husky hook 做提交前eslint检查，见 .husky/pre-commit, 未通过eslint检查的将无法commit。

### 路由规则
会默认将pages下一级目录文件加入到路由中，新增页面只需要在pages下新建目录，即可通过/目录名称 访问。

使用vue-plugin-pages 实现

```
// vite.config.ts

 Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
      exclude: ['**/components/*.vue']
    }),
```

### 注意事项
1. 如果新增了新的接口，检查下是否命中了vite.config.ts中代理的接口地址，如果没有命中，新增一条规则。

```
{
   server: {
    proxy: {
      '/api': target,
      '/api2': target,
    }
  }
}
```
