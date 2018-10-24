<template>
  <div class="left-nav">
    <!--<h1>left nav bar</h1>-->
    <div class='left-nav-list'>
      <router-link class='nav-list-item'
                   to="/myAccount/overview">
        账户概览
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/lendRecord">
        出借记录
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/myRedPackage">
        我的红包
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/inviteReward">
        邀请奖励
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/moneyRecord">
        资金记录
      </router-link>
      <router-link class='nav-list-item'
                   to="/myAccount/accountSetting">
        账号设置
      </router-link>
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
    padding: 15px;

    .left-nav-list {
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
