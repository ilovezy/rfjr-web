<template>
  <div class="withdraw-part">
    <div class='info-item'
         style='font-size: 30px;margin-bottom: 30px;'>我要出金
    </div>

    <div v-if='loading' v-loading='loading' style='padding: 30px;'>
    </div>
    <div v-else>
      <div v-if='!realNameFlag'>请先进行实名认证</div>
      <div v-else-if='!bindCardFlag'>请先绑定银行卡</div>

      <div v-else>
        <el-form status-icon
                 style='margin-top: 30px;'
                 ref="ruleForm2"
                 label-width="140px"
                 class="demo-ruleForm">
          <el-form-item label="可用资金(USD)"
                        prop="amount">
            ￥{{availableBalance}}
          </el-form-item>
          <el-form-item label="出金金额"
                        prop="amount">
            <el-input type="number"
                      placeholder="出金金额"
                      v-model.number="amount"></el-input>
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
</template>

<script>
  import AXIOS from '../../../../global/Fetch';

  export default {
    data() {
      return {
        amount: '',
        availableBalance: '',
        bindCardFlag: false,
        openAccountFlag: false,
        realNameFlag: false,
        loading: true
      }
    },
    created() {
      this.getToken()
    },
    computed: {
      // btnDisabled() {
      //   return isNaN(this.identityNo) || this.identityNo.length < 6 || this.identityNo.length > 16
      // }
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
          this.loading = false
          this.availableBalance = res.availableBalance
          this.balance = res.balance
          this.bindCardFlag = res.bindCardFlag
          this.name = res.name
          this.openAccountFlag = res.openAccountFlag
          this.realNameFlag = res.realNameFlag
          this.account = res.account
        })
      },

      validForm() {
        if (!this.amount) {
          this.$message.warning('请输入出金金额');
          return
        }
        if (this.amount > this.availableBalance) {
          this.$message.warning('可用资金不足');
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$message.warning('出金中，请稍后...')
        AXIOS.post('/api/member/withdraw', {
          amount: this.amount,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$message.success('出金成功');
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .withdraw-part {

  }
</style>
