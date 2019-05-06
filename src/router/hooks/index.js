/* hooks 目录用于配置路由钩子 */
import routerViewChange from './routerViewChange';

const allHooks = [
  /* 放置全部的路由钩子 */
  routerViewChange
];
const routeInterceptor = ({ path: toPath, query: toQuery, matched }, { path: fromPath }, next) => {
  // 路由拦截
  if (matched.length === 0) {
    // 404页面
    next({ path: '/error/404' });
  } else {
    // 找到匹配当前路由的钩子
    const hookMatched = allHooks.filter(({ path: hookPath }) => {
      if (hookPath instanceof RegExp) {
        const routerPathReg = hookPath;
        return routerPathReg.test(toPath);
      }
      return hookPath === toPath;
    });
    const hookLen = hookMatched.length;
    if (hookLen) {
      let hookActived = 0;
      // 匹配到路由钩子后, 触发该路由下的全部钩子函数
      hookMatched.forEach((hook /* ,  idx */) => {
        hook.action({
          toPath,
          fromPath,
          toQuery,
          next(params) {
            // 使用计数器控制 保证全部路由钩子均执行完毕 (包括异步调用 next 函数)后, 才继续路由导航
            if (hookActived < hookLen - 1) {
              hookActived += 1;
              return;
            }
            next(params);
          }
        });
      });
    } else {
      next();
    }
  }
};

export default routeInterceptor;
