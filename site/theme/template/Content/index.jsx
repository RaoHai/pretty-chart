import MainContent from './MainContent';
import collect from 'bisheng/collect';

function noop() {}

export default collect(async (nextProps) => {
  const pathname = nextProps.location.pathname;
  let pageDataPath;
  
  pageDataPath = pathname.split('/');
  if (pathname.indexOf('demo') === 0) {
    pageDataPath.shift();
  }

  if (nextProps.params && nextProps.params.children) {
    pageDataPath.splice(pageDataPath.length - 1, 0, 'children');
  }
  
  console.log('>> pageData', pathname, pageDataPath);
  const pageData = nextProps.utils.get(nextProps.data, pageDataPath);
  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }

  const pageDataPromise = typeof pageData === 'function' ?
          pageData() : (pageData.index)();
  const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);
  const childrenFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'children']);

  
  const fetches = [
    pageDataPromise,
    demosFetcher ? demosFetcher() : noop,
    childrenFetcher ? [ childrenFetcher ] : noop,
  ];

  const [ localizedPageData, demos, children ] = await Promise.all(fetches);

  console.log('>> localizedPageData', localizedPageData);
  return {
    localizedPageData,
    demos : demosFetcher ? demos : null,
    children: childrenFetcher ? children : null,
  };

})(MainContent);