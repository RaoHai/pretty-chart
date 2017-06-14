const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

module.exports = {
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    demos(markdownData) {
      const filename = markdownData.meta.filename;
      const dir = path.dirname(filename);
      if (!/^site\/posts/.test(filename) ||
          /[/\\]demo$/.test(dir)) return;

      const matches = /[/\\](\w+)\/children/.exec(dir);
      return {
        meta: markdownData.meta,
        topLevel: !matches,
        parent: matches ? matches[1] : null,
      };
    }
  },
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [{
      path: '/demo/:category(/:children)',
      component: contentTmpl,
    }]
  },
};
