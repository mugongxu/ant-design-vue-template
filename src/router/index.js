import Vue from 'vue';
import Router from 'vue-router';

import routeInterceptor from './hooks';

import error from './error';
import page1 from './page1';
import page2 from './page2';
import page3 from './page3';

Vue.use(Router);

const MainContainer = () => import ('#/mainContainer');
const insertRootCompHelper = (routerConf) => {
    const newRouterConf = [...routerConf];
    newRouterConf[0].component = MainContainer;

    return newRouterConf;
};

// 用于配置与导航栏对应结构的路由
const navRouter = [
  ...insertRootCompHelper(page1),
  ...insertRootCompHelper(page2),
  ...insertRootCompHelper(page3)
];

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: navRouter[0].redirect,
      component: MainContainer
    },
    ...navRouter,
    ...error
  ]
});

router.beforeEach(routeInterceptor);

export { navRouter };
export default router;
