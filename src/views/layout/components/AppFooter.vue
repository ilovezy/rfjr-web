<template>
  <div class='footer'>
    <div class='footer-wrap global-container'>
      备案号：<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备18049944号</a>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    computed: {

    },
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .footer {
    background: #eee;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #333;
    z-index: 30;
    .footer-wrap {
text-align: center;
    }
  }
</style>
