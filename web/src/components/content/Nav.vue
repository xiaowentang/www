<template>
  <div id="nav-bar">
    <div id="nav">
      <a-row type="flex" justify="center">
        <a-col :xs="18" :sm="7" :lg="7" :xl="4" :xxl="4">
          <div class="nav-left"><img src="../../assets/img/logo3.png" alt=""></div>
        </a-col>
        <a-col :xs="0" :sm="17" :lg="17" :xl="12" :xxl="12">
          <div>
            <ul>
              <li><router-link to='/home1'>首页</router-link></li>
              <li><router-link to='/class'>课程介绍</router-link></li>
              <li><router-link to='/instances'>康复案例</router-link></li>
              <li><router-link to='/message'>康复信息</router-link></li>
              <li><router-link to='/employ'>招贤纳士</router-link></li>
              <li><router-link to='/about'>联系我们</router-link></li>
            </ul>
          </div>
        </a-col>
        <a-col :xs="3" :sm="0" id="navbar">
          <a-dropdown :trigger="['click']">
            <a-button class="ant-dropdown-link">
              <a-icon type="menu" />
            </a-button>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to='/home'>首页</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to='/class'>课程介绍</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to='/home'>康复案例</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to='/home'>康复信息</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to='/employ'>招贤纳士</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to='/about'>联系我们</router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-col>
        <a-col :xs="0" :sm="0" :lg="0" :xl="5" :xxl="3">
          <a-col class="nav-right">
            <a-col :xl="10" :xxl="12" id="phone">
              <img src="../../assets/img/phone.png" alt="">
              <span>康复热线：</span>
            </a-col>
            <a-col :xl="14" :xxl="12" id="phone-right">
              <span>15674888003</span>
              <span>17317282369</span>
            </a-col>
          </a-col>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name:'Nav'
}
</script>

<style scoped>
@import "../../assets/css/nav.css";
</style>
