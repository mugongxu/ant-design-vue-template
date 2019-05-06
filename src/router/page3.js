const index = () => import('@/views/page3/index');

export default [
  {
    path: '/page3',
    redirect: '/page3/index',
    name: '页面3',
    class: 'nav-icon-page3',
    children: [
      {
        path: '/page3/index',
        name: '页面3首页',
        component: index
      }
    ]
  }
];
