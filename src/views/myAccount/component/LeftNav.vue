<template>
  <div class="left-nav">
    <!--<h1>left nav bar</h1>-->
    <div class='left-nav-list'>
      <div class='nav-list-title'>我的账户</div>
      <router-link class='nav-list-item'
                   to="/myAccount/account">
        账户概览
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/realName">
        实名认证
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/openAccount">
        在线开户
      </router-link>

      <router-link class='nav-list-item'
                   to="/myAccount/bindBankCard">
        绑定银行卡
      </router-link>

      <div class='nav-list-title'>我的资金</div>
      <router-link class='nav-list-item'
                   to="/myAccount/recharge">
        我要入金
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/rechargeList">
        入金记录
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/withdraw">
        我要出金
      </router-link>

      <router-link class='nav-list-item'
                   to="/myAccount/withdrawList">
        出金记录
      </router-link>

      <div class='nav-list-title'>账号管理</div>
      <router-link class='nav-list-item'
                   to="changePassword">
        修改登录密码
      </router-link>
      <!--<router-link class='nav-list-item'-->
                   <!--to="/myAccount/realName">-->
        <!--退出登录-->
      <!--</router-link>-->
      <!--<router-link class='nav-list-item'-->
                   <!--to="/myAccount/openAccount">-->
        <!--我要下载-->
      <!--</router-link>-->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'leftNav',
    data() {
      return {}
    },

    mounted() {
    },

    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .left-nav {
    .left-nav-list {
      height: 100%;
      overflow-y: auto;
      .nav-list-title {
        display: block;
        padding: 15px;
        box-sizing: border-box;
        background: #4fb7ea;
        color: #fff;
      }
      .nav-list-item {
        display: block;
        padding: 15px;
        box-sizing: border-box;
        border-left: 3px solid #fff;
        &.router-link-exact-active {
          border-left: 3px solid red;
        }
        &:hover {
          background: #e2e2e2;
        }
      }
    }
  }
</style>
