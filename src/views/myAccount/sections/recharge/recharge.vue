<template>
  <div>
    <div class='title'>
      我要入金
    </div>

    <div class='form-body'>
      <div class='form-item'
           style='margin-bottom: 0.2rem;'>
        <input type='number'
               class='form-control'
               style='width: 100%;'
               maxlength="10"
               placeholder="输入入金金额"
               v-model.number="amount">
      </div>
      <p style='margin-bottom: 0.4rem;'>汇率：<span style='color: orangered;'>7.75</span></p>
    </div>

    <div class='select-pay-way-wrap'>
      <div class='title-sm'>选择支付方式</div>

      <div class='pay-way-container'>
        <span class='alipay-item'
              @click='selectAli'
              :class='type == "alipay" && "active"'>
          <span class='iconfont icon-umidd317 ali-icon'></span> 支付宝
        </span>
        <span class='bank-item'
              @click='selectBank'
              :class='type == "bank_card" && "active"'>
          <img src='./img/bank.png'
               class='bank-icon'
               alt=''>银联
        </span>
      </div>

      <div class='info-container'>
        <div v-if='type == "alipay"'>
          <div class='qrcode'>
            <img src='./img/qrcode.png'
                 alt=''>
          </div>
        </div>
        <div v-if='type == "bank_card"'
             class='bank-wrap'>
          <div class='item'>户名：王萃</div>
          <div class='item'>开户银行：中国银行杭州文辉支行</div>
          <div class='item'>开户银行卡号：6216696200004027992 </div>
        </div>
      </div>
    </div>

    <div class='btn btn-primary btn-block'
         @click="validForm">我已经确认支付，确认
    </div>


    <div class='btn btn-default btn-block'
         @click="goBack">支付遇到问题，关闭
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        amount: '',
        type: 'alipay'
      }
    },
    created() {
      this.getToken()
    },
    methods: {
      selectAli() {
        this.type = 'alipay'
      },
      selectBank() {
        this.type = 'bank_card'
      },
      goBack() {
        this.$router.back()
      },

      getToken() {
        if (!USER.isLogin()) {
          USER.logout()
          this.$router.push('/login')
        }
      },

      validForm() {
        if (this.amount) {
          this.doConfirm()
        } else {
          this.$dialog.toast({mes: '请输入入金金额'});
        }
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$dialog.loading.open('入金中，请稍后...')
        this.axios.post('/api/member/recharge', {
          amount: this.amount,
          type: this.type
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$dialog.toast({mes: '入金成功'});
          setTimeout(() => {
            this.$router.replace('/account')
          }, 1000)
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>

  .recharge-page {
    .form-item-special {
      transition: all 0.5s ease;
      .pwd-icon {
        width: 0.23rem;
      }
    }
    .form-sm {
      width: 1.5rem;
    }
    .btn-primary {
      margin-top: 0.5rem;
    }

    .form-body {
      margin-top: 0.5rem !important;
    }

    .select-pay-way-wrap {
      .title-sm {
        margin-bottom: 15px;
        font-size: 20px;
      }

      .pay-way-container {
        display: flex;
        align-items: center;
        .alipay-item,
        .bank-item {
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          width: 130px;
          height: 70px;
          margin-right: 20px;
          padding-left: 15px;
          transition: all 0.4s ease;
          &.active {
            border: 1px solid #1296db;
          }
        }
        .alipay-item {
          .ali-icon {
            color: #1296db;
            font-size: 40px;
            display: inline-block;
            margin-right: 10px;
          }
        }
        .bank-item {
          .bank-icon {
            display: inline-block;
            width: 50px;
            margin-right: 10px;
          }
        }
      }

    }

    .info-container {
      height: 3rem;
      margin-top: 0.5rem;
      .qrcode {
        width: 3rem;
        height: 3rem;
        margin: 0 auto;
      }

      .bank-wrap {
        .item {
          margin-bottom: 0.3rem;
          font-size: 20px;
        }
      }
    }

    .btn-default {
      border: 1px solid #eaeaea;
      margin-top: 0.5rem;
      border-radius: 0;
    }
  }

</style>
