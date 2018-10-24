<template>
  <div class="my-account-page">
    <div class='my-account-page-wrap global-container'>
      <left-nav></left-nav>

      <div class='my-account-container'>
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftNav from './component/LeftNav'

  export default {
    components: {
      LeftNav
    },
    computed: {
      key() {
        return this.$route.fullPath
      }
    },
    name: 'myAccount',
    data() {
      return {}
    },

    mounted() {
    },

    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss">
  .my-account-page {
    height: 100%;
    .my-account-page-wrap {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .left-nav {
        width: 220px;
        height: 400px;
        display: inline-block;
        border-right: 1px solid #e2e2e2;
        box-sizing: border-box;
      }

      .my-account-container {
        display: inline-block;
        flex: 1;

        >div {
          animation: slide 0.5s ease;
          padding: 15px;
        }
      }
    }

    @keyframes slide {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }


  }
</style>
