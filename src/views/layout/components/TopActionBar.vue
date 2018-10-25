<template>
  <div class='top-action-bar'>
    <div class='top-action-bar-wrap global-container'>
      <div class='left'>
        <!--客服热线：400-150-8080 （工作日时间：8:00-20:00）-->
      </div>
      <div class='right' v-if='logined && loginName'>
        <span>欢迎你: {{loginName}}</span>
        <span @click='doLogout' style='margin-left: 30px;cursor: pointer;'>登出</span>
      </div>
      <div class='right' v-else>
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
    computed: {
    },
    data() {
      return {
        logined: false,
        loginName: '',
      }
    },
    created(){
      this.getIsLogin()
    },
    methods: {
      getIsLogin(){
        this.logined = USER.isLogin()
        this.loginName= USER.getLoginName()
      },

      doLogout(){
        USER.logout()
        this.$message.success('登出成功,请重新登录')
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
      }
    }
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
