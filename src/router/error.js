/**
 * 404模块路由配置配置
 */
const error = () => import('@/views/error/404');

export default [
  {
    path: '/error',
    name: 'error',
    redirect: '/error/404',
    component: error,
    children: [
      {
        path: '/error/404',
        name: '404',
        component: error
      }
    ]
  }
];
