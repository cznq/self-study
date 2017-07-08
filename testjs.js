<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<style>
.input{
  width:500px;
  height:30px;
  border:1px solid black;
}
ul{
  list-style:none;
  width:500px;
  height:auto;
  border:1px solid red;
}
.check{
  color:red;
}
.font{
  font-size: 18px;
}
</style>
<body>
  <script src="vue.js"></script>
<div id="info">
<input v-model='param' v-on:click='additem'>
  <ul>
    <li v-for='item in items' v-bind:class={check:item.check} @click='onclick(item)'>
      {{item.name}}
    </li>
  </ul>
</div>
</body>
<script>
var todolist = new Vue({
  el:'#info',
  data:{
    items:[
      {
        name:'aa',
        check:false
      },
      {
        name:'bb',
        check:true
      }
    ],
    param:''
  },
  methods:{
    onclick:function(item){
      item.check = !item.check;
    },
    additem:function(){
      this.items.push({
        name:this.param,
        check:false
      }),
      this.param ='';
    }
  }
})
</script>
