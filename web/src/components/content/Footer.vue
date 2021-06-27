<template>
  <div id="footer-end">
    <div id="footer">
      <a-row type="flex" justify="center">
        <a-col :xs="0" :sm="0" :lg="8" :xl="7" :xxl="6">
          <div class="footer-left hidden-xs-only"><img src="../../assets/img/logo2.png" alt=""></div>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="9" :xl="9" :xxl="5">
          <div class="footer-mid">
            <h4>上海欣声听力康复技术中心</h4>
            <ul>
              <li>公司地址：上海市宝山区梅林路358号</li>
              <li>联系电话：15674888003</li>
              <li>官方微信：13636999987</li>
              <li>企业邮箱：xskangfu@qq.com</li>
            </ul>
          </div>
        </a-col>
        <a-col :xs="24" :sm="8" :lg="6" :xl="4" :xxl="5">
          <div class="footer-right">
            <a-col :xs="0" :sm="12" :xl="11" :xxl="11">
              <img src="../../assets/img/wechat.png" alt="">
            </a-col>
            <a-col :xs="0" :sm="12" :xl="13" :xxl="13" class="right">
              <div class="right"><span>微信扫一扫</span>
                <span>即时沟通咨询</span></div>
            </a-col>
          </div>
        </a-col>
      </a-row>
    </div>

    <div id="end">
      <a-row type="flex" justify="center">
        <p>©2021 Copyright 上海欣声听力康复技术中心. All Rights Reserved. 沪ICP备2021002266</p>
        <p><router-link to='/login'>后台</router-link></p>
      </a-row>
    </div>

  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
@import "../../assets/css/Footer.css";
</style>
