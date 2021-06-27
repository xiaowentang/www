<template>
  <div id="healthyMes"> 

    <div class="box"></div>

    <div id="main">

      <a-row>
        <a-col :xl="20" class="header">
          <a-icon type="home" theme="filled" :style="{fontSize:'18px',color:'#c5d7e3'}"/>
          <span>首页 > 康复信息</span>
          <hr>
        </a-col>
      </a-row>

      <a-row class="center">
        <a-col :xl="14" class="left">
          <a-col :xl="22" class="model" v-for="item in message" :key="item._id">
            <a-col :xl="7">
              <img :src="item.img" alt="tupian" class="message-img">
            </a-col>
            <a-col :xl="16" class="model-rig">
              <h4>{{item.title}}</h4>
              <p v-html="item.body"></p>
            </a-col>
          </a-col>

        </a-col>
        
        <a-col :xl=5 class="right">

          <a-col :xl="24" class="model-right">
            <a-col :xl="24" class="right-header">
              <h4>康复案例</h4>
            </a-col>
            <a-col :xl="21" class="model1" v-for="item in instance" :key="item._id">
              <a-col :xl="10">
                <img :src="item.img" alt="">
              </a-col>
              <a-col :xl="14">
                <p>{{item.insTitle}}</p>
                <p v-html="item.insArticle"></p>
                </a-col>
            </a-col>
            
          </a-col>

          <a-col :xl="24" class="model-right2">
            <a-col :xl="24" class="right-footer">
              <h4>推荐阅读</h4>
            </a-col>
            <a-col :xl="21" class="model1" v-for="item in recommend" :key="item._id">
              <a-col :xl="10">
                <img :src="item.img" alt="">
              </a-col>
              <a-col :xl="14">
                <p>{{item.recTitle}}</p>
                <p v-html="item.recArticle"></p>
                </a-col>
            </a-col>
          </a-col>
        </a-col>
      </a-row>
    </div>

    <div id="ption">
      <a-pagination :total="message.length"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

//实例化axios
const http = axios.create({
  baseURL:'http://localhost:8000',
  timeout:5000
})

export default {
  name:'Message',
  data(){
    return {
      current:1,
      message:[],
      instance:[],
      recommend:[],
    }
  },
  created(){
    // http({
    //   method:'post',
    //   url:'/messages'
    // }).then(res =>{
    //   console.log(res.data)
    //   this.message = res.data;
    // })
    http({
      method:'get',
      url:'http://localhost:8089/api/rest/articles'
    }).then(res =>{
      console.log(res.data, 456)
      this.message = res.data;
    })
    http({
      method:'get',
      url:'http://localhost:8089/api/rest/instances'
    }).then(res =>{
      console.log(res.data, 3333)
      this.instance = res.data;
    })
    http({
      method:'get',
      url:'http://localhost:8089/api/rest/recommends'
    }).then(res =>{
      console.log(res.data, 3333)
      this.recommend = res.data;
    })
    // http({
    //   method:'post',
    //   url:'/instance'
    // }).then(res =>{
    //   console.log(res.data)
    //   this.instance = res.data;
    // }),
    // http({
    //   method:'post',
    //   url:'/recommend'
    // }).then(res =>{   
    //   console.log(res.data)
    //   this.recommend = res.data;
    // })
  },
  methods:{
    article(){
      window.alert("你好")
      
    },
    
  }

}
</script>

<style scoped>
@import "../assets/css/Message.css";
</style>