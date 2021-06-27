<template>
  <div id="healthyDetail"> 

    <div class="box"></div>

    <div id="main">

      <a-row>
        <a-col :xl="20" class="header">
          <a-icon type="home" theme="filled" :style="{fontSize:'18px',color:'#c5d7e3'}"/>
          <span>首页 > 文章详情</span>
          <hr>
        </a-col>
      </a-row>

      <a-row class="center">
        <a-col :xl="14" class="left">
          <a-col :xl="22" class="model">
            <a-col :xl="16" class="model-rig">
              <h4>{{message[0].mesTitle}}</h4>
              <p>{{message[0].mesArticle}}</p>
            </a-col>
          </a-col>
        </a-col>
        
        <a-col :xl=5 class="right">

          <a-col :xl="24" class="model-right">
            <a-col :xl="24" class="right-header">
              <h4>康复案例</h4>
            </a-col>
            <a-col :xl="21" class="model1">
              <a-col :xl="10">
                <img src="../assets/img/ins1.png" alt="">
              </a-col>
              <a-col :xl="14"><p>{{instance[0].insTitle}}</p></a-col>
            </a-col>
            <a-col :xl="21" class="model1">
              <a-col :xl="10">
                <img src="../assets/img/ins2.png" alt="">
              </a-col>
              <a-col :xl="14"><p>{{instance[1].insTitle}}</p></a-col>
            </a-col>
            <a-col :xl="21" class="model2">
              <a-col :xl="10">
                <img src="../assets/img/ins3.png" alt="">
              </a-col>
              <a-col :xl="14"><p>{{instance[2].insTitle}}</p></a-col>
            </a-col>
            
          </a-col>

          <a-col :xl="24" class="model-right2">
            <a-col :xl="24" class="right-footer">
              <h4>推荐阅读</h4>
            </a-col>
            <a-col :xl="21" class="model3">
              <a-col :xl="10">
                <img src="../assets/img/rec1.png" alt="">
              </a-col>
              <a-col :xl="14">
                <p>{{recommend[0].recTitle}}</p>
                <p>{{recommend[0].recArticle}}</p>
                </a-col>
            </a-col>
            <a-col :xl="21" class="model3">
              <a-col :xl="10">
                <img src="../assets/img/rec2.png" alt="">
              </a-col>
              <a-col :xl="14">
                <p>{{recommend[1].recTitle}}</p>
                <p>{{recommend[1].recArticle}}</p>
                </a-col>
            </a-col>
            <a-col :xl="21" class="model3">
              <a-col :xl="10">
                <img src="../assets/img/rec3.png" alt="">
              </a-col>
              <a-col :xl="14">
                <p>{{recommend[1].recTitle}}</p>
                <p>{{recommend[1].recArticle}}</p>
                </a-col>
            </a-col>
          </a-col>
        </a-col>
      </a-row>
    </div>

    <div id="ption">
      <a-pagination v-model="current" :total="50" show-less-items/>
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
  name:'Mesdetail',
  data(){
    return {
      current:1,
      message:[],
      instance:[],
      recommend:[],
    }
  },
  created(){
    http({
      method:'post',
      url:'/messages'
    }).then(res =>{
      console.log(res.data)
      this.message = res.data;
    }),
    http({
      method:'post',
      url:'/instance'
    }).then(res =>{
      console.log(res.data)
      this.instance = res.data;
    }),
    http({
      method:'post',
      url:'/recommend'
    }).then(res =>{   
      console.log(res.data)
      this.recommend = res.data;
    })
  },
  methods:{
    article(){
      window.alert("你好！")
      
    },
    
  }

}
</script>

<style scoped>
@import "../assets/css/Message.css";
</style>