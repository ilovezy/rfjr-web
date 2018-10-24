<template>
  <div class="login-container">

    <el-form class="login-form"
             autoComplete="on"
             :model="loginForm"
             :rules="loginRules"
             ref="loginForm"
             label-position="left">

      <div class="title-container">
        <h3 class="title">闪电系统登录</h3>
      </div>

      <el-form-item prop="loginName">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input name="loginName"
                  type="number"
                  v-model="loginForm.loginName"
                  autoComplete="on"
                  placeholder="请输入用户名"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input name="password"
                  :type="passwordType"
                  @keyup.enter.native="handleLogin"
                  v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="请输入密码"/>
        <span class="show-pwd"
              @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>

      <el-button type="primary"
                 style="width:100%;margin-bottom:30px;"
                 :loading="loading"
                 @click.native.prevent="handleLogin">登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
  import particlesConfig from './particleConfig.json'
  import AXIOS from '../../global/Fetch'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isValidPhone(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (!isValidPassword(value)) {
          callback(new Error('请输入正确的密码，6-16位密码必须字母+数字'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          loginName: window.isDev ? 18768143328 : '',
          password: window.isDev ? '19920501zy' : ''
        },
        loginRules: {
          loginName: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',
        loading: false
      }
    },

    mounted() {
    },

    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },

      handleLogin() {
        const self = this
        const loginName = self.loginForm.loginName
        const password = self.loginForm.password
        self.$refs.loginForm.validate(valid => {
          if (valid) {
            self.loading = true
            const env = process.env.NODE_ENV
            let clientSecret = env == 'production' ? CONFIG.serviceParam.clientSecretProd : CONFIG.serviceParam.clientSecret
            AXIOS.post('/security/account/token', {
              loginName: loginName,
              password: password,
              clientName: CONFIG.serviceParam.clientName,
              clientSecret: clientSecret
            }).then(res => {
              USER.setToken(res.token)
              USER.setLoginName(loginName)
              USER.setUserType(res.userType)
              self.$router.push({ path: '/' })
            }).catch(() => {
              self.loading = false
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg: #283443;
  $light_gray: #eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item__error {
      font-size: 20px;
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      margin-bottom: 40px;
    }
  }
</style>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  $bg: #fff;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    background-color: $bg;
    .login-form {
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 10px;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 32px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
