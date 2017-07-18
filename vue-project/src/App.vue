<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <p>child tells me:{{childwords}}</p>
    <component-a msgfrom='you die' v-on:child-tell-me='listentomyboy'></component-a>
  </div>
</template>

<script>
import Hello from './components/Hello'
import componentA from './components/componentA'
export default {
  name: 'app',
  data: function(){
  return{
     childwords:'',
  }
  },
  components: {
    Hello,componentA
  },
  methods:{
    listentomyboy: function(msg){//子级向父级传递数据
     this.childwords = msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
