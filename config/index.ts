const { NODE_ENV, DEPLOY_ENV } = process.env;

const domains = {
  cd: 'https://yy-s.zuoyebang.cc',
  rq: 'https://fwyy.cdnjtzy.com'
};

const domain = DEPLOY_ENV ? domains[DEPLOY_ENV] || '' : '';
const projectName = 'ui-editor';
const isDev = NODE_ENV === 'development';

const getPublicPath = () => {
  if (isDev) {
    return '/';
  }
  if (domain) {
    return `${domain}/static/${projectName}/`;
  }
};

export default {
  publicPath: getPublicPath()
};
