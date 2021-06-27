<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/content/Nav'
import Footer from './components/content/Footer'

export default {
  name: 'App',
  components:{
    Nav,Footer
  }
}
</script>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
}
</style>

