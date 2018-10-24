<template>
  <div class="overview-part">
    <!--<h1>我的主页</h1>-->
    <div class='top-container'>
      <div class='basic-info'>
        <span class='iconfont icon-ava12tar avatar'></span>
        <div class='basic-info-detail'>
          <div>登录账户：{{name}}</div>
          <div class='basic-info-item'>交易账户：{{openAccountFlag ? account : '未开户'}}</div>
          <div>《客户资金安全协议合同》 <a href='./客户资金安全协议合同.pdf' download='客户资金安全协议合同.pdf'  style='color: red;'>点击下载 TODO</a></div>
        </div>
      </div>
      <div class='code'></div>
    </div>

    <div class='main-container'>
      <div class='main-item'>
        <div class='number'>{{balance | formatThousands}}</div>
        <div class='text'>资金(USD)</div>
      </div>

      <div class='main-item'>
        <div class='number'>{{availableBalance | formatThousands}}</div>
        <div class='text'>可用资金(USD)</div>
      </div>
    </div>

    <div class='footer-container'></div>
  </div>
</template>

<script>

  export default {
    name: 'leftNav',
    data() {
      return {
        availableBalance: 0,
        balance: 0,
        bindCardFlag: false,
        name: '',
        openAccountFlag: false,
        realNameFlag: false,
        account: ''
      }
    },

    created() {
      this.getToken()

    },
    mounted() {
    },

    methods: {
      formatThousands: function (num) {
        return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      },
      goTarget(link, needBandCard) {
        if (this.realNameFlag) {
          if (needBandCard && !this.bindCardFlag) {
            this.$dialog.confirm({
              title: '提示',
              mes: '<div style="line-height: 0.5rem">请先绑定银行卡再进行操作</div> ',
              opts: [
                {
                  txt: '取消',
                  color: false
                },
                {
                  txt: '前往绑卡',
                  color: true,
                  callback: () => {
                    this.$router.push('/bindBankCard')
                  }
                }
              ]
            })
          } else {
            this.$router.push(link)
          }
        } else {
          this.$dialog.confirm({
            title: '提示',
            mes: '<div style="line-height: 0.5rem">请先实名认证再进行操作</div> ',
            opts: [
              {
                txt: '取消',
                color: false
              },
              {
                txt: '前往实名',
                color: true,
                callback: () => {
                  this.$router.push('/realName')
                }
              }
            ]
          })
        }
      },

      getToken() {
        if (USER.isLogin()) {
          this.getAccount()
        } else {
          USER.logout()
          this.$router.push('/login')
        }
      },

      getAccount() {
        AXIOS.post('/api/member/center').then(res => {
          this.availableBalance = res.availableBalance
          this.balance = res.balance
          this.bindCardFlag = res.bindCardFlag
          this.name = res.name
          this.openAccountFlag = res.openAccountFlag
          this.realNameFlag = res.realNameFlag
          this.account = res.account
        })
      },

      logout() {
        USER.logout()
        this.$dialog.toast({mes: '退出登录成功！请重新登录'})
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      },
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .overview-part {
    padding: 50px !important;

    .top-container {
      border: 1px solid #eaeaea;
      margin-bottom: 15px;
      .basic-info {
        display: flex;
        align-items: center;
        padding: 15px;

        .avatar {
          font-size: 120px;
          color: #9E9E9E;
          margin-right: 30px;
        }

        .basic-info-detail {
          > div {
            margin-bottom: 10px;
          }
        }
      }

    }

    .main-container {
      display: flex;
      align-items: center;
      border: 1px solid #eaeaea;
      margin-bottom: 15px;
      padding: 15px;
      .main-item {
        margin-right: 50px;
        .number {
          margin-bottom: 15px;
          font-size: 20px;
          color: orangered;
        }
        .text {

        }
      }

    }

    .footer-container {

    }
  }
</style>
