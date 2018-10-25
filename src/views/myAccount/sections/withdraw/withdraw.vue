<template>
  <div class="withdraw-part">
    <div class='info-item'
         style='font-size: 30px;margin-bottom: 30px;'>我要出金
    </div>

    <el-form status-icon
             style='margin-top: 30px;'
             ref="ruleForm2"
             label-width="100px"
             class="demo-ruleForm">
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
</template>

<script>
  import AXIOS from '../../../../global/Fetch';

  export default {
    data() {
      return {
        amount: ''
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
        if (!USER.isLogin()) {
          USER.logout()
          this.$router.push('/login')
        }
      },

      validForm() {
        if (!this.amount) {
          this.$message.warning('请输入出金金额');
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
