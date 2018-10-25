<template>
  <div class="changePassword-part">
    <el-form status-icon
             ref="ruleForm2"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="老密码"
                    prop="oldPassword">
        <el-input type="text"
                  v-model="oldPassword"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码"
                    prop="newPassword">
        <el-input type="text"
                  v-model="newPassword"
                  autocomplete="off"></el-input>
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
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
      }
    },
    created() {
      this.getToken()
    },
    methods: {
      getToken() {
        if (!USER.isLogin()) {
          USER.logout()
          this.$router.push('/login')
        }
      },

      validForm() {
        if (!isValidPassword(this.oldPassword)) {
          this.$message.warning('老密码格式不正确，长度为6-16位');
          return
        }
        if (!isValidPassword(this.newPassword)) {
          this.$message.warning('新密码格式不正确，长度为6-16位');
          return
        }
        if (this.oldPassword == this.newPassword) {
          this.$message.warning('新,老密码不能一样');
          return
        }
        this.doConfirm()
      },

      //提交注册
      doConfirm() {
        const self = this
        this.$message.warning('登录密码修改中，请稍后...')
        AXIOS.post('/api/member/password/change', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$message.success('修改成功');
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .changePassword-part {

  }
</style>
