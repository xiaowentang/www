<template>
  <div id="employ">

    <div id="banner">
      <a-row>
        <a-col :span="24">
          <img src="../assets/img/banner5.png" alt="">
        </a-col>
      </a-row>
    </div>

    <div id="main">
      <a-row type="flex" justify="center">
        <a-col>
          <h3>招贤纳士</h3>
        </a-col>
      </a-row>

      <a-row class="header">
        <a-col :xs="22" :sm="23" :xl="19" :xxl="15" id="box1">
          <a-col :xs="18" :sm="6" :xl="5" :xxl="5">
            <div class="header-left">
              <h4>心理咨询师</h4>
              <p>坐标上海 招聘8人</p>
            </div>
          </a-col>
          <a-col :xs="24" :sm="16" :xl="18" :xxl="18">
            <div class="header-mid">
              <ul>
                <li>职位描述：</li>
                <li>1.参与核心产品的工业设计，输出概念，3D，渲染图，协助跟进设计打样。</li>
                <li>2.参与核心产品的规划，收集和分析产品需求，协助输出产品定义。</li>
            </ul>
            </div>
          </a-col>
          <a-col :xs="10" :sm="2" :xl="1" :xxl="1">
            <div class="header-right">
              <a-button type="primary" icon="plus"></a-button>
            </div>
          </a-col>
        </a-col>
      </a-row>

      <a-row class="middle">
        <a-col :xs="22" :sm="23" :xl="19" :xxl="15" id="box2">
          <a-col :xs="18" :sm="6" :xl="5" :xxl="5">
            <div class="middle-left">
              <h4>产品规划师</h4>
              <p>坐标上海 招聘8人</p>
            </div>
          </a-col>
          <a-col :xs="24" :sm="16" :xl="18" :xxl="18">
            <div class="middle-mid">
              <ul>
                <li>职位描述：</li>
                <li>1.参与核心产品的工业设计，输出概念，3D，渲染图，协助跟进设计打样。</li>
                <li>2.参与核心产品的规划，收集和分析产品需求，协助输出产品定义。</li>
              </ul>
              <ul>
                <li>任职要求：</li>
                <li>1.热爱设计。</li>
                <li>2.设计天赋。对线条，光影，质感有出色的敏感度。</li>
                <li>3.设计功底。熟练运用3D建模及渲染软件。</li>
                <li>4.工作经验不限，设计相关专业。</li>
              </ul>
            </div>
          </a-col>
          <a-col :xs="10" :sm="2" :xl="1" :xxl="1">
            <div class="middle-right">
              <a-button type="primary" icon="plus"></a-button>
            </div>
          </a-col>
        </a-col>
      </a-row>

      <a-row class="header">
        <a-col :xs="22" :sm="23" :xl="19" :xxl="15" id="box3">
          <a-col :xs="18" :sm="6" :xl="5" :xxl="5">
            <div class="header-left">
              <h4>销售经理</h4>
              <p>最低学历大专</p>
            </div>
          </a-col>
          <a-col :xs="24" :sm="16" :xl="18" :xxl="18">
            <div class="header-mid">
              <ul>
                <li>职位描述：</li>
                <li>1.参与核心产品的工业设计，输出概念，3D，渲染图，协助跟进设计打样。</li>
                <li>2.参与核心产品的规划，收集和分析产品需求，协助输出产品定义。</li>
            </ul>
            </div>
          </a-col>
          <a-col :xs="10" :sm="2" :xl="1" :xxl="1">
            <div class="header-right">
              <a-button type="primary" icon="plus"></a-button>
            </div>
          </a-col>
        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script>
export default {
  name:'employ'
}
</script>

<style scoped>
  @import "../assets/css/Employ.css";
</style>
