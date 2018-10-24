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
      redirect: '/myAccount/overview',
      name: 'myAccountPage',
      meta: {
        title: '我的账户',
      },
      children: [{
        path: 'overview',
        component: () => import('@/views/myAccount/sections/overview'),
        name: 'overview',
        meta: {
          title: '账户概览',
        },
      },{
        path: 'lendRecord',
        component: () => import('@/views/myAccount/sections/lendRecord'),
        name: 'lendRecord',
        meta: {
          title: '出借记录',
        },
      },{
        path: 'myRedPackage',
        component: () => import('@/views/myAccount/sections/myRedPackage'),
        name: 'myRedPackage',
        meta: {
          title: '我的红包',
        },
      },{
        path: 'inviteReward',
        component: () => import('@/views/myAccount/sections/inviteReward'),
        name: 'inviteReward',
        meta: {
          title: '邀请奖励',
        },
      },{
        path: 'moneyRecord',
        component: () => import('@/views/myAccount/sections/moneyRecord'),
        name: 'moneyRecord',
        meta: {
          title: '资金记录',
        },
      },{
        path: 'accountSetting',
        component: () => import('@/views/myAccount/sections/accountSetting'),
        name: 'accountSetting',
        meta: {
          title: '账号设置',
        },
      },]
    }]
  }
]
