const index = () => import('@/views/page1/index');

export default [
  {
    path: '/page1',
    redirect: '/page1/index',
    name: '页面1',
    class: 'nav-icon-page1',
    children: [
      {
        path: '/page1/index',
        name: '页面1首页',
        component: index
      }
    ]
  }
];
