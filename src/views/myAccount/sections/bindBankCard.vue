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
               style='margin-top: 30px; font-size: 20px;'
               v-if='bindCardFlag'>
            <div class='info-item'>
              <span class='label'>开户银行卡号:</span> {{cardNo}}
            </div>
          </div>

          <div v-else>
            <el-form status-icon
                     style='margin-top: 30px;'
                     ref="ruleForm2"
                     label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="户名"
                            prop="trueName">
                {{trueName}}
              </el-form-item>
              <el-form-item label="开户银行卡号"
                            prop="trueName">
                <el-input type="number"
                          placeholder="请输入开户银行卡号"
                          maxlength="10"
                          v-model="cardNo"
                          autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary"
                           @click="validForm">确定
                </el-button>
              </el-form-item>
            </el-form>
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
          this.$message.warning('请重新登录')
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        }
      },

      getAccount() {
        AXIOS.post('/api/member/center').then(res => {
          this.bindCardFlag = res.bindCardFlag
          this.realNameFlag = res.realNameFlag
          this.cardNo = res.cardNo
          this.trueName = res.trueName
          this.loading = false
          this.$store.dispatch('UPDATE_USER_INFO', res)

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
        this.$message.success('绑卡成功！');
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
