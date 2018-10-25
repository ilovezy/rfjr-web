<template>
  <div class='top-action-bar'>
    <div class='top-action-bar-wrap global-container'>
      <div class='left'>
        <!--客服热线：400-150-8080 （工作日时间：8:00-20:00）-->
      </div>

      <div class='right'>
        <router-link to='/login' class='item'>登录</router-link>
        <router-link to='/register' class='item'>注册</router-link>
        <!--<router-link to='/inviteFriend' class='item'>邀请好友</router-link>-->
        <!--<router-link to='/helpCenter' class='item'>帮助中心</router-link>-->
        <!--<span class='item'>关注我们</span>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    computed: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .top-action-bar {
    height: 50px;
    line-height: 50px;
    background: #f5f8ff;

    .top-action-bar-wrap {
      @include flex-between();

      .item {
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
</style>
