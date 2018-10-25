<template>
  <div class="bindBankCard-part">
    <div class='title'>
      绑定银行卡
      <p style='font-size: 14px; color: #ff4426;margin-top: 5px;'>注释：请您务必填写与户名一致的银行卡号，如果身份信息与出金银行账户名字不一致，可能会导致无法出金。</p>
    </div>

    <div v-loading="loading">
      <div v-if='!loading'>
        <div v-if='!realNameFlag'>
          <el-alert
            title="提示"
            description="请先开通实名认证"
            type="warning"
            :closable='false'
            show-icon>
          </el-alert>
        </div>

        <div v-else>
          <div class='info-wrap'
               v-if='bindCardFlag'>
            <div class='info-item'>
              <span class='label'>开户银行卡号:</span> {{cardNo}}
            </div>
          </div>

          <div v-else>
            <div class='form-body'
                 style='margin-top: 1rem;'>
              <div class='input-spe-wrap'>
                <div class='label'
                     style='margin-bottom: 0.5rem;'>户名: {{trueName}}
                </div>
              </div>

              <div class='input-spe-wrap'>
                <div class='label'
                     style='margin-bottom: 0.5rem;'>开户银行卡号
                </div>
                <div class='form-item'>
                  <input type="number"
                         class='form-control'
                         placeholder="请输入开户银行卡号"
                         v-model="cardNo">
                </div>
              </div>
            </div>
            <div class='btn btn-primary btn-block'
                 @click="validForm">确定
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'leftNav',
    data() {
      return {
        cardNo: '',
        loading: true,
        bindCardFlag: false,
        trueName: '',
        realNameFlag: false
      }
    },
    created() {
      this.getToken()
    },
    methods: {
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
          this.bindCardFlag = res.bindCardFlag
          this.realNameFlag = res.realNameFlag
          this.cardNo = res.cardNo
          this.trueName = res.trueName
          this.loading = false
        })
      },
      validForm() {
        if (!isValidCardNumber(this.cardNo)) {
          this.$message.warning('请输入正确的开户银行卡号');
          return
        }
        this.doRegister()
      },

      //提交注册
      doRegister() {
        const self = this
        this.$message.warning('绑卡中，请稍后...')
        AXIOS.post('/api/member/bindCard', {
          cardNo: this.cardNo,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        this.$message.warning('绑卡成功！');
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .bindBankCard-part {
    .title {
      font-size: 30px;
    }
  }
</style>
