<template>
  <div id="home">

    <div id="banner">
      <a-row>
        <a-col :xs="24" :sm="0">
          <a-carousel autoplay>
            <div class="bar">
              <a-col><img src="../assets/img/banner1.png" alt=""></a-col>
              <a-col class="bar-text">
                <h4>欣声听力康复中心</h4>
                <P>专注与服务听损家庭，成为听损家庭坚实的后盾</P>
              </a-col>
            </div>
            <div class="bar1">
              <img src="../assets/img/banner2.png" alt="">
              <div class="bar-text1">
                <h4>遵循孩子的发展规律</h4>
                <P>负责任，陪伴倾听每一位听损儿童家长</P>
              </div>
            </div>
            <div class="bar2">
              <img src="../assets/img/banner3.png" alt="">
              <div class="bar-text2">
                <h4>期待遇到更好的自己</h4>
                <P>启发思考，探讨方法，培养能力，让未来欣欣向荣！</P>
              </div>
            </div>
          </a-carousel>
        </a-col>
      </a-row>

      <a-row>
        <a-col :xs="0" :sm="24">
          <a-carousel autoplay>
            <div>
              <img src="../assets/img/bar1.png" alt="">
            </div>
            <div>
              <img src="../assets/img/bar2.png" alt="">
            </div>
            <div><img src="../assets/img/bar3.png" alt=""></div>
          </a-carousel>
        </a-col>
      </a-row>
    </div>


    <div id="message">
      <a-row type="flex" justify="center">
        <a-rol><h3>欣声听力康复中心</h3></a-rol>
      </a-row>
      <a-row type="flex" justify="center" class="message-mid">
        <a-col :xs="0" :sm="24" :lg="24" :xl="24" :xxl="24">
          <img src="../assets/img/bg3.png" >
        </a-col>
        <a-col :xs="24" :sm="24" :lg="24" :xl="24" :xxl="24" class="message-right">
          <h4>接纳·相信·负责任</h4>
          <p>
            欣声听力康复以听觉口语法及语言矫正为理论基础，打造以家庭为单位的康复形式，独创多种游戏活动，创造属于每一个家庭独一无二的康复方式。遵循孩子的发展规律，陪伴倾听每一位孩子听损儿童家长，支持父母在成就孩子的同时遇到更好的自己，启发思考，探讨方法，培养能力，真正实现“随时随地康复”加入欣声让现在掷地有声，让未来欣欣向荣！
          </p>
        </a-col>
      </a-row>
    </div>


    <div id="share">
      <a-row type="flex" justify="center">
        <h3>康复分享</h3>
      </a-row>
      <a-row type="flex" justify="center">
        <a-col :sx="24" :sm="12" :xl="10" :xxl="8" class="video1">
          <video src="../assets/video/1.mp4" poster="../assets/img/fm2.png" controls="controls"></video>
        </a-col>
        <a-col :sx="24" :sm="12" :xl="10" :xxl="8" class="video2">
          <video src="../assets/video/5.mp4" poster="../assets/img/fm1.png" controls="controls"></video>
        </a-col>
      </a-row>
    </div>


    <div id="time">
      <div>
        <a-row type="flex" justify="center" class="time-header">
          <a-col>
            <h3>康复时间轴</h3>
            <h4>发现、检查、配机、康复、教育，您的每一步，我们都保驾护航</h4>
          </a-col>
        </a-row>

        <a-row type="flex" justify="center">
          <a-col :xs="24" :sm="8" :xl="6" :xxl="5">
            <div class="time-left">
              <img src="../assets/img/ear.png" alt="">
                <h5 style="color:#3f91c7">发现听损</h5>
                <p>
                  当孩子诊断为听力损失后，大部分的家长都无法接受这个事实，会感到迷茫，无助，不知所措。大多家长会像无头苍蝇一样，到处咨询、查阅资料。答案却是千奇百态，无法判断信。如果您在发现听损第一阶段，我们为你解答。
                </p>
                <a-button type="danger">心态</a-button>
                <a-button type="warning">该怎么做</a-button>
            </div>
          </a-col>
          <a-col :xs="24" :sm="8" :xl="6" :xxl="5">
            <div>
              <div class="model">
                <img src="../assets/img/book.png" alt="">
                <h5 style="color: #43cbd0;">检查复查</h5>
                <p>做了一大堆的检查，一大堆的专有名词，但是家长看报告却犹如天书。这些疑问，为您解说。</p>
              </div>
              <div id="model">
                <img src="../assets/img/person.png" alt="">
                <h5 style="color: #e56969;">康复教育</h5>
                <p>不同年龄康复教育理念不同，我们会根据患儿情况量身定做康复方案。</p>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :sm="8" :xl="6" :xxl="5">
            <div>
              <div class="model2">
                <img src="../assets/img/medical.png" alt="">
                <h5 style="color: #fc8857;">配选助听设备</h5>
                <p>助听器和耳蜗有什么区别？人工耳蜗那么贵，可以报销吗？一起来探究助听设备的秘密。</p>
              </div>
              <div class="model3">
                <img src="../assets/img/heart.png" alt="">
                <h5 style="color: #9b8de2;">关系</h5>
                <p>我们被不同的人需要。和孩子在一起，我们被孩子需要，我们被爱的人需要...</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>


    <div id="apply">
      <a-row type="flex" justify="center">
        <div class="apply-header"><a-rol :xl="24"><h3>免费申请试听课</h3></a-rol></div>
      </a-row>
      <a-row type="flex" justify="center" class="apply-mid">
        <a-col :xs="0" :sm="24" :xl="24" :xxl="24">
          <img src="../assets/img/bg2.png" alt="">
        </a-col>
        <a-rol :xs="24" :sm="12" :xl="24" :xxl="24">
            <div class="apply-form">
              <form action="#" method="post">
                <div class="apply-main">
                  <span>体验课程申请通道，</span><span>每天仅限15个名额</span>
                </div>
                <div class="apply-in">
                  <a-input placeholder="您的称呼或者孩子的姓名" />
                  <a-input id="applymid" placeholder="填写手机号码，获取今天免费试听名额"/>
                  <a-button class="applybtn">获取验证码</a-button>
                  <a-input placeholder="填写手机验证码"/>
                </div>
                <div class="apply-footer">
                  <a-button type="primary">申请体验课程</a-button>
                  <span class="apply-span">或者拨打客服热线:</span>
                  <span>15674888003</span>
                </div>
              </form>
            </div>
        </a-rol>
      </a-row>
    </div>


    <div id="result">
      <a-row type="flex" justify="center">
        <h3>康复成果</h3>
      </a-row>
      <a-row type="flex" justify="center" class="result-main">
        <a-col :xs="24" :sm="8" :xl="7" :xxl="5">
          <div class="result_model result_left result-left">
            <img src="../assets/img/result3.png" alt="">
            <h4>九岁植入人工耳蜗，竟然成了大家眼中“别人家的孩子”</h4>
            <p>
              近九岁植入人工耳蜗在普校随班就读，和健全孩子一起升入高校辽宁省残运会乒乓球单打冠军，沈阳市残运会1500米冠军，800米亚军，4*100接力冠军……
            </p>
              <a-button type="primary" class="btn">查看详情</a-button>
            </div>
        </a-col>
        <a-col :xs="24" :sm="8" :xl="7" :xxl="5">
          <div class="result_model result-mid result_left">
            <img src="../assets/img/result2.png" alt="">
            <h4>先天性失聪小文重获声音世界</h4>
            <p>
              有人说，上帝给你关了一扇门，必将为你打开一扇窗。但实际上，谁都希望门、窗是完整的。也许，有的人会认命，永远放弃那扇门；而有的人，则会竭尽全力去推开门看一看外面的风景。
            </p>
              <a-button type="primary" class="btn">查看详情</a-button>
            </div>
        </a-col>
        <a-col :xs="24" :sm="8"  :xl="7" :xxl="5">
          <div class="result_model result_left result-right">
            <img src="../assets/img/result1.png" alt="">
            <h4>3到6岁儿童听力正常值是多少</h4>
            <p>
              她，曾在无声的黑暗中，默默坚韧；她，终在豆蔻年华之日，重回有声；沉默的十余年中，她从不轻言放弃，犹如寒风中的梅花，盛开，直到暗香扑面而来！她，就是汪伊美！
            </p>
              <a-button type="primary" class="btn">查看详情</a-button>
            </div>
        </a-col>
      </a-row>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Home1',
  data(){
    return{
      barImg:[
        {src:require("../assets/img/banner1.png")},
        {src:require("../assets/img/banner2.png")},
        {src:require("../assets/img/banner3.png")}
      ]
    }
  }
}
</script>


<style scoped>
@import "../assets/css/Home1.css";
</style>
