<template>
  <div class="register-container">

    <el-form class="login-form"
             autoComplete="on"
             :model="loginForm"
             :rules="loginRules"
             ref="loginForm"
             label-position="left">

      <div class="title-container">
        <h3 class="title">注册</h3>
      </div>

      <el-form-item prop="loginName">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input name="loginName"
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

      <el-form-item prop="inviteId">
        <span class="svg-container spe">
          <!--<svg-icon icon-class="guide"/>-->
          邀请码
        </span>
        <el-input name="inviteId"
                  v-model="inviteId"
                  autoComplete="on"
                  placeholder="请输入邀请码"/>
      </el-form-item>

      <div class="cell-protocol"
           style='margin-bottom: 30px;'>
        <el-checkbox v-model="checked">注册即代表同意<span @click='dialogVisible = true'
                                                    style='color: orangered;cursor: pointer;'>《客户协议书》</span>
        </el-checkbox>
      </div>
      <el-button type="primary"
                 style="width:100%;margin-bottom:30px;"
                 :loading="loading"
                 :disabled='!checked'
                 @click.native.prevent="handleLogin">注册
      </el-button>

    </el-form>

    <el-dialog
      title="《客户协议书》"
      :visible.sync="dialogVisible"
      width="80%">
      <div class="protocol-body">
        <div class="protocol-info">
          <p> 1. 重要提示：请您务必在参与实盘交易前详细阅读本规则并充分认可以下内容</p>
          <p> 2. 期货市场风险莫测，一定要熟悉交易规则，认识交易风险，不可贸然入市。</p>
          <p> 3. 无论参与商品期货交易还是股指期货交易，都应评估自身的经济承受能力、风险控制能 力、身体及心理承受能力,审慎决定自己是否参！</p>
        </div>

        <p style='margin-top: 0.6rem;margin-bottom: 0.5rem;'>期市有风险，投资需谨慎</p>
        <div class="protocol-info protocal-main">
          <p>
            No.1、关于平台：朗潤金融是为用户提供系统软件服务、账户资金和交易风险保证金监督及交易信息咨询的第三方服务机构。用户根据参与规则，通过朗潤金融官方网站注册帐号，熟悉认可《交易规则》签订《服务协议书》，并支付交易风险保证金，获取出资方免息授信期货实盘操
            作权，进行商品期货和金融期货投资，获取操作账户的收益并承担账户亏损。</p>
          <p> No.2、实盘申请时间：交易日 24 小时均可通过本平台申请实盘交易账号，实盘账号申请完毕后登陆交易系统入金充值后即可进行国际期货投资交易。</p>
          <p> No.3、充值：交易资金以美金为基础货币（简称：基币），基币只可用于交易和提现；</p>
          <p> No.4、风险保证金：用于用户承担操作亏损赔付，操盘结束后按最后一笔交易平仓后账户余额结算收益。</p>
          <p> No.5、保证金到账时间：用户在充值保证金后，资金额度会立即体现在申请的实盘交易主账号内，登陆交易账号即可进行实盘交易。</p>
          <p> No.6、强制平仓：任意时刻保证金额度达到或低于系统强制平仓线时，系统自动终止操盘者操作权，并对账户所有合约按市价平仓，最终成交价以实际成交价为准。极端情况下强 平后
            金额可能出现负数，如果出现负数该笔损失由用户自行补上，如不补上我司保有追回 该笔损失的权利。</p>
          <p> No.7、买卖合约品种及交易手续费：买入、卖出双向收取。交易手续费包括：交易产生的交易所和期货公司的各项手续费、佣金以及平台管理费。如改策调整，系统将随政策变化 调整交易手续费用。</p>
          <p>No.8、实盘交易时间：用户实盘可进行买入卖出期货合约时间为交易日各合约交易所规定的交易时间（定时强平合约除外）</p>

          <p>No.9、定时平仓：因期货交易涉及到高杠杆交易，为规避隔夜风险，不连续交易合约交易 设定
            为日内交易，即交易不连续合约在每日收盘前 35 分钟必须将持有合约平仓，未能按时平仓
            的持仓单系统将执行强制平仓；连续交易合约设定为周内交易，即连续交易合约在 每周六收盘
            前 35 分钟必须将持有合约平仓，未能按时平仓的持仓单系统将执行强制平仓。定时强平的
            持仓我们将无法保证您的盈亏，平仓价按实际成交价为准。连续交易合约 可以持仓过夜不受
            上述定时平仓约束。
          </p>
          <p>No.10、突发行情：建立持仓后由于行情波动剧烈造成平仓后保证金余额少于强平线的风险
            由客户自己承担。
          </p>
          <p>No.11、交易标的当日涨跌幅大于或等于该合约涨跌价 1%时请勿开仓，如仍然继续开仓，
            导致涨停或跌停系统无法强平，隔夜产生的穿仓行为所导致的亏损，平台有权追回由此恶
            意操作所造成的损失。
          </p>
          <p>No.12、账户结算：系统在账户期货合约平仓后实时对账户进行结算。账户盈亏等于币种账
            户所有持仓平仓结算后帐户余额。
          </p>
          <p>No.13、盈亏分配：如操盘盈利，操盘所有盈利均归操盘方（用户）所有；平台不再加收其
            他任何费用。
          </p>
          <p>No.14、出金规则：出金资金为基币余额加上币种可用余额，币种资金如需提现到绑定银行
            卡内，需要开户时绑定银行卡，签约的出金银行账户可更改，但户名不能更改，如需变更 银
            行卡，需解约后重新签约。客户在平台充值的基币和交易过程中产生的币种账户净盈利 均可
            申请当日提现，盈利也可累积到以后交易日作为账户保证金或滚存利润。操盘者在每 日平仓
            后（无持仓）可通过系统发出出金申请，出金申请发出后系统将当日内将保证金或 利润转账
            至操盘者绑定银行卡内。
          </p>
          <p>No.15、系统提示：平台提供的消息提醒服务仅用于操作参考，平台将力求消息的及时和准
            确，如因为程序问题及网络延迟等原因造成消息错误或未送达，平台不承担任何责任。
          </p>
          <p>No.16、数据显示差异申明：因系统后台保留的小数点位数要长于前端展示给用户的小数点
            位数，加之系统后台计算自动四舍五入因素，两种数据取值的计算结果存在一定差异，以 系
            统后台清洁算数据为准。</p>

          <p> No.17、交易风险申明：</p>
          <p>1） 、目前信管家提供的交易系统中的建仓和平仓功能；设定止盈设定止损价格功能，可能
            会存在以下风险：在您使用该功能时，虽然您设定了建仓或平仓的价格；止盈、止损价格，
            但是由于电脑设备运行速度、交易模式、网络传输速度等原因，可能会导致在行情触及或穿
            越指定价格时，交易系统没有为您成交建仓或平仓，或者成交价格偏离您设置的指定价格，
            您的交易没有达成。因此，我们特别提示您在使用交易系统中指价建仓和指价平仓功能包括
            设定止盈、止损价格功能时，应充分考虑上述风险。如果您无法理解或承受上述风险，我们
            建议您不要使用该功能进行交易。如果您坚持使用该功能，我们将认为您已经完全理解并愿
            意承担使用该功能的全部风险，并愿意承担使用该功能所带来的一切后果。</p>

          <p>2） 、技术风险：由于交易撮合及行情揭示等是通过电子通讯技术和电脑技术来实现的，这
            些技术存在着被网络黑客和计算机病毒攻击的可能，由此可能给用户带来损失，用户将不 得
            不承担由此造成的损失。
          </p>
          <p>3） 、不可抗力因素导致的风险：诸如地震、火灾、水灾、战争等不可抗力因素可能导致交
            易系统的瘫痪；与平台连接的期货公司或期货公司与交易所的服务器托管机房和网络运营 商，
            他们无法控制和不可预测的系统故障、设备故障、通讯故障、电力故障等也可能导致 平台系
            统非正常运行甚至瘫痪，这些都会使用户的交易委托无法成交或者无法全部成交， 用户将不
            得不承担由此造成的损失。其他风险：由于用户密码失密、操作不当、投资决策 失误等原因
            可能会导致的损失，该损失将由客户自行承担。
          </p>
          <p>4） 、如果由于某种原因使用户无法通过互联网进行正常的交易委托，请立即与平台在线客
            服联系或及时拨打 0571-85853217 通过电话报单交易的方式，我们会尽快帮助用户解决出
            现的问题，并且提供全面的人工咨询服务。
          </p>
          <p>No.18、互联网使用申明
          </p>
          <p>1） 、互联网是全球性公共网络，并不由任何一个机构所控制。数据在互联网上传输的途径 不
            是完全确定的。互联网本身并不是一个安全可靠的网络环境。
          </p>
          <p> 2） 、互联网上的传输的数据可能被截获或窃听，但平台已经对用户交易数据进行了加密处 理，
            即使数据被他人截获，他们也不一定能了解数据的内容。
          </p>
          <p> 3） 、由于互联网上传输线路拥挤、服务器忙或其他原因，交易指令可能会出现中断、停 顿、
            延迟、数据错误等情况，由于交易环境不同，报单交易要通过海底光缆才能到达境外交
            易所，每笔报单时间大概在 600 毫秒内，延迟在 600 毫秒内的交易均属正常反馈，如延迟
            超过 1 秒以上，为了保证用户顺利交易，建议用户务必及时联系客服。
          </p>
          <p> 4） 、互联网上发布行情信息及其他证券信息可能出现滞后、错误或误导。
          </p>
          <p> 5） 、用户选择廉价宽带网络服务商提供的上网服务，可能导致在某些情况下对某些区域的
            服务器访问缓慢甚至不能访问，这种情况下不能正常访问平台服务器，建议用户选择有实 力
            的运营商提供的高质稳定的宽带上网服务。
          </p>
          <p> No.19、请严格保密自己的交易账号及密码，切勿将交易账号及密码以任何形式泄露给他 人，
            如用户将交易账号及密码泄露给他人，由此产生的一切损失须用户自行承担。
          </p>
          <p> No.20、平台故障免责申明
            互联网技术日新月异的同时也蕴藏着各种未知风险，我们承诺投入更多的技术、资金和人 力，
            最大程度去保障交易系统稳定运行，不断提升用户交易体验感，但无法承诺能够 100% 的无
            故障运行。一旦交易系统发生故障，用户有可能因错失交易时机造成实际损失，对此我 们不
            仅无法认定更无力承担，用户将不得不承担由此造成的损失。
          </p>
          <p> No.21、参与规则完善申明
            本规则解释权归属朗潤金融，同时金发金融保留对参与规则进行必要的变更和完善，并力求
            通过网站提前给予发布。</p>
          <p> 期市有风险，投资需谨慎！</p>
        </div>
      </div>
      <span slot="footer"
            class="dialog-footer">
    <el-button type="primary"
               @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import AXIOS from '../../global/Fetch'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (value) {
          callback()
        } else {
          callback(new Error('请输入正确的用户名'))
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (isValidPassword(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的密码，6-16位'))
        }
      }
      return {
        loginForm: {
          loginName: window.isDev ? 18768143328 : '',
          password: window.isDev ? '1qaz2wsx' : ''
        },
        loginRules: {
          loginName: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',
        loading: false,

        inviteId: '',
        dialogVisible: false,
        checked: false
      }
    },
    created() {
      this.setInviteId()
    },
    methods: {
      setInviteId() {
        const query = this.$route.query || {}
        this.inviteId = query.inviteId || ''
      },
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
        if (self.inviteId) {
          self.$refs.loginForm.validate(valid => {
            if (valid) {
              self.loading = true
              AXIOS.post('/security/api/member/register', {
                loginName: loginName,
                password: password,
                inviteId: self.inviteId
              }).then(res => {
                USER.setToken(res)
                USER.setLoginName(loginName)
                self.$message({
                  type: 'success',
                  message: '注册成功'
                })
                self.loading = false
                self.$router.push({ path: '/myAccount' })
              }).catch(() => {
                self.loading = false
              })
            } else {
              return false
            }
          })
        } else {
          self.$message({
            type: 'warning',
            message: '没有邀请码不能注册'
          })
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg: #eaeaea;
  $light_gray: #eee;
  $cursor: #fff;

  /* reset element-ui css */
  .register-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 65%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #333;
        height: 47px;
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;

      }
    }

    .el-form-item__error {
      font-size: 16px;
      margin-top: 3px;
    }

    .el-form-item {
      border-bottom: 1px solid #333;
      /*background: rgba(0, 0, 0, 0.1);*/
      /*border-radius: 5px;*/
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

  .register-container {
    background-color: $bg;
    .login-form {
      width: 520px;
      padding: 35px;
      margin: 120px auto;
      /*background: #eaeaea;*/
      /*box-shadow: 0px 0 3px #000;*/
      border: 1px solid #eaeaea;
      /*border-radius: 10px;*/
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
      width: 65px;
      display: inline-block;
      font-size: 20px;
      &_login {
        font-size: 25px;
      }

      &.spe{
        font-size: 14px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 32px;
        color: #333;
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

  .protocol-body {
    line-height: 1.5;
    color: #333;
    max-height: 500px;
    overflow-y: auto;
    h1 {
      text-align: center;
      color: #333;
    }
    h2 {
      color: #333;
      line-height: 0.8rem;
    }
    strong {
      color: #333;
    }
    ul {
      list-style: decimal;
      padding-left: 0.36rem;
      li {
        padding-bottom: 0.15rem;
        &:last-child {
          padding-bottom: 0;
        }
        ul {
          list-style: lower-alpha;
          padding-top: 0.15rem;
          ul {
            list-style: disc;
            padding-left: 0.3rem;
          }
        }
        p {
          padding-top: 0.15rem;
        }
      }
    }
    p {
      margin-bottom: 0.15rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .indent2 {
    text-indent: 2em;
  }

  .protocal-main {
    p {
      margin-bottom: 0.5rem;
    }
  }
</style>
