<template>
  <div id="class">

    <div id="banner">
      <a-row>
        <a-rol :span="24" class="bar-img">
          <img src="../assets/img/banner6.png" />
        </a-rol>
        <a-rol :span="24" class="bar">
          <h3>
            陪伴倾听每一位听损儿童家长
          </h3>
          <p>
            让现在掷地有声，让未来欣欣向荣！
          </p>
        </a-rol>
      </a-row>
    </div>

    <div id="recommend">
      <a-row type="flex" justify="center" class="main-header">
        <a-col>
          <h3>课程介绍</h3>
        </a-col>
      </a-row>
      <a-row type="flex" justify="left">
        <a-col :xs="24" :sm="12" :lg="10" :xl="10" :xxl="10" class="main-left">
          <h4>欣声家庭康复</h4>
          <p>欣声听力康复以听觉口语法及言语矫治为理论基础，打造以家庭为单位的
            康复形式，独创多种游戏活动，创造属于每一个家庭独一无二的康复方式。
            遵循孩子的发展规律，陪伴倾听每一位听损儿童家长，支持父母在成就孩
            子的同时遇到更好的自己，启发思考，探讨方法，培养能力，真正实现“
            随时随地康复” 加入欣声让现在掷地有声，让未来欣欣向荣！</p>
        </a-col>
        <a-col :xs="0" :sm="12" :lg="10" :xl="11" :xxl="10" class="main-right">
          <img src="../assets/img/bg5.png" alt="">
        </a-col>
      </a-row>
    </div>

    <div id="ability">
      <a-row type="flex" justify="center">
        <a-col>
          <h3>启发思考，探讨方法，培养能力</h3>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-col :xs="10" :sm="4" :lg="4" :xl="4" class="aby1">
          <img src="../assets/img/way4.png" />
          <p>听能---建立听觉型大脑</p>
        </a-col>
        <a-col :xs="10" :sm="4" :lg="4" :xl="4" class="aby">
          <img src="../assets/img/way1.png" />
          <p>言语---说话好听的秘诀</p>
        </a-col>
        <a-col :xs="10" :sm="4" :lg="4" :xl="4" class="aby">
          <img src="../assets/img/way2.png" />
          <p>语言---理解和表达</p>
        </a-col>
        <a-col :xs="10" :sm="4" :lg="4" :xl="4" class="aby">
          <img src="../assets/img/way5.png" />
          <p>认知---教学目标的基础</p>
        </a-col>
        <a-col :xs="10" :sm="4" :lg="4" :xl="4" class="aby">
          <img src="../assets/img/way3.png" />
          <p>沟通---有礼貌的交流</p>
        </a-col>
        <a-col :xs="10" :sm="0" :lg="0">
          <div></div>
        </a-col>

      </a-row>
    </div>

    <div id="instances">
      <a-row type="flex" justify="center">
        <a-col>
          <h3>康复案例</h3>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-col :xs="20" :sm="8" :lg="7" :xl="7" class="ins1">
          <video src="../assets/video/1.mp4" poster="../assets/img/fm2.png" controls="controls"></video>
          <p>恺恺带来了儿歌</p>
        </a-col>
        <a-col :xs="20" :sm="8" :lg="7" :xl="7" class="ins2">
          <video src="../assets/video/5.mp4" poster="../assets/img/fm1.png" controls="controls"></video>
          <p>恺恺带来了儿歌</p>
        </a-col>
        <a-col :xs="20" :sm="8" :lg="7" :xl="7" class="ins3">
          <video src="../assets/video/1.mp4" poster="../assets/img/fm2.png" controls="controls"></video>
          <p>恺恺带来了儿歌</p>
        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "Classes"
}
</script>

<style scoped>
@import "../assets/css/Classes.css";
</style>
