<template>
  <div class='download-container'>
    <div class='item-ios'>
      <div class='left-info'>
        <span class='iconfont icon-ios'></span>
        <div>苹果</div>
      </div>
      <span class='qrcode-wrap'>
          <img src='./img/ios.png'
               alt=''>
        </span>
    </div>
    <div class='item-android'>
      <div class='left-info'>
          <span class='iconfont icon-anzhuo'
                style='color: green'></span>
        <div>安卓</div>
      </div>
      <span class='qrcode-wrap'>
            <img src='./img/android.jpg'
                 alt=''>
          </span>
      <p>安卓版：使用手机浏览器扫描二维码（不支持微信扫描）</p>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },

  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .download-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150px 0;
    .left-info {
      margin-bottom: 30px;
    }
    .iconfont {
      font-size: 40px;
      display: inline-block;
      margin-bottom: 5px;
    }

    .qrcode-wrap {
      img {
        width: 140px;
        height: 140px;
      }
    }

    .item-ios,
    .item-android {
      width: 300px;
      height: 380px;
      border: 1px solid #eaeaea;
      text-align: center;
      padding: 35px;
    }

    .item-ios {
      margin-right: 60px;
    }

    .item-android {
      p {
        margin-top: 15px;
        color: #333;
        line-height: 26px;
      }
    }
  }

</style>
