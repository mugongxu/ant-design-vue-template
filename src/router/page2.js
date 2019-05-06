const index = () => import('@/views/page2/index');

export default [
  {
    path: '/page2',
    redirect: '/page2/index',
    name: '页面2',
    class: 'nav-icon-page2',
    children: [
      {
        path: '/page2/index',
        name: '页面2首页',
        component: index
      }
    ]
  }
];
