<template>
  <div id="about">

    <div id="banner">
      <a-row>
        <a-col :span="24">
          <img src="../assets/img/banner4.png" alt="">
        </a-col>
        <a-col class="bar">
          <h4>接纳 相信 负责任</h4>
          <p>欣声听力康复中心不忘初心，点亮每一个听损家庭</p>
        </a-col>
      </a-row>
    </div>

    <div id="main">
      <a-row type="flex" justify="center" class="main-header">
        <a-col>
          <h3>联系我们</h3>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center" class="main-footer">
        <a-col :xs="24" :sm="12" :xl="10" :xxl="7" class="main-left">
          <div>
            <h4>上海欣声听力康复技术中心</h4>
            <ul>
              <li>联系电话：1567488803</li>
              <li>邮箱：xskangfu@qq.com</li>
              <li>微信公众号名称：欣声听力康复中心</li>
              <li>地址：上海市宝山区梅林路358号1、2、4、5、7、8、10、11幢</li>
            </ul>
          </div>
          <div class="foot-left">
            <a-col :xs="12" :sm="10" :xl="10" :xxl="10">
              <img src="../assets/img/wechat.png" alt="">
            </a-col>
            <a-col :xs="12" :sm="12" :xl="10" :xxl="11" class="foot-right">
              <h5>微信扫一扫</h5>
              <p>获取更多康复信息</p>
            </a-col>
          </div>
        </a-col>
        <a-col :xs="0" :sm="12" :xl="11" :xxl="7" class="main-right">
          <img src="../assets/img/bg4.jpg" alt="">
        </a-col>
      </a-row>
    </div>

    <div id="map">
      <a-row class="map">
        <a-col :span="24">
         <div class="map-area" :id="mapId"></div>
        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script>
 import loadBMap from '../assets/js/Map'

export default {
  name:'about',
  data() {
    return {
      mapId: 'BMap-' + parseInt(Date.now() + Math.random()),
      myMap: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      loadBMap('ADwmOOlB3D6hHgxtahRTwbioo9tjOFPo')
        .then(() => {
          this.myMap = new BMap.Map(this.mapId)
          this.myMap.centerAndZoom(new BMap.Point(121.443859,31.372458), 17)
          const point=new BMap.Point(121.443859,31.372458);
          const marker = new BMap.Marker(point);
          this.myMap.addOverlay(marker);
          this.myMap.addControl(
            new BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          )
          this.myMap.setCurrentCity('上海')
          this.myMap.enableScrollWheelZoom(true)
        })
        .catch(err => {
          console.log('地图加载失败')
        })
    }
  }
}
</script>

<style scoped>
@import "../assets/css/About.css";
</style>
