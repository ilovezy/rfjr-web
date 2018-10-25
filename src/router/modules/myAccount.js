import Layout from '@/views/layout/Layout'

export default [
  {
    path: '/myAccount',
    component: Layout,
    meta: {
      title: '我的账户',
    },
    children: [{
      path: '/myAccount',
      component: () => import('@/views/myAccount/myAccountPage'),
      redirect: '/myAccount/account',
      name: 'myAccountPage',
      meta: {
        title: '我的账户',
      },
      children: [{
        path: 'account',
        component: () => import('@/views/myAccount/sections/account'),
        name: 'account',
        meta: {
          title: '我的主页',
        },
      },{
        path: 'realName',
        component: () => import('@/views/myAccount/sections/realName'),
        name: 'realName',
        meta: {
          title: '实名认证',
        },
      },{
        path: 'openAccount',
        component: () => import('@/views/myAccount/sections/openAccount'),
        name: 'openAccount',
        meta: {
          title: '在线开户',
        },
      },{
        path: 'bindBankCard',
        component: () => import('@/views/myAccount/sections/bindBankCard'),
        name: 'bindBankCard',
        meta: {
          title: '绑定银行卡',
        },
      },{
        path: 'changePassword',
        component: () => import('@/views/myAccount/sections/changePassword'),
        name: 'changePassword',
        meta: {
          title: '修改登录密码',
        },
      },]
    }]
  }
]
