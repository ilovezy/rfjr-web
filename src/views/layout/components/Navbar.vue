<template>
  <div class='navbar '>
    <div class='navbar-wrap global-container'>
      <div class='logo' style='height: 80px'>
        <img src='./img/logo.png'
             style='height: auto;transform: scale(0.5);position: relative;left: -100px;top: -10px;'
        alt=''>
        <!--朗潤金融-->
      </div>

<!--      <div class='nav-list'>-->
<!--        <router-link class='nav-list-item'-->
<!--                     to="/myAccount">-->
<!--          个人中心-->
<!--        </router-link>-->
<!--        <router-link class='nav-list-item'-->
<!--                     to="/dealDetail">-->
<!--          朗潤金融合约明细-->
<!--        </router-link>      <router-link class='nav-list-item'-->
<!--                     to="/download">-->
<!--          软件下载-->
<!--        </router-link>-->
<!--        &lt;!&ndash;<router-link class='nav-list-item item-my-account'&ndash;&gt;-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    data() {
      return {
        isTestEnv: window.CurrentEnv == 'development'
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .navbar {
    border-bottom: 1px solid #e2e2e2;
    height: 80px;
    line-height: 80px;

    .navbar-wrap {
      @include flex-between;
      overflow: hidden;
      height: 100%;

      .logo {
        font-size: 36px;
      }

      .nav-list {
        height: 100%;
        .nav-list-item {
          display: inline-block;
          padding: 0 20px;
          box-sizing: border-box;
          height: 100%;
          &.router-link-exact-active {
            border-bottom: 3px solid #428bca;
          }

          &.item-my-account {
            margin-left: 80px;
            &.router-link-active {
              border-bottom: 3px solid #428bca;
            }
          }
        }
      }
    }
  }
</style>
