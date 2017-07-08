<!-- <!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>定时器</title>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<style>
#info{
 width: 100%;
 height: auto;
}
.input{
  display: block;
  width:350px;
  height: 30px;
  border: 1px solid #000;
  margin: 0 auto;
}
ul{

  width:350px;
  height: auto;
 list-style: none;
  margin: 0px auto 0px;
}
.none{
  display: none;
}
</style>
<body>
<div id="info">
<input class='input' v-model='array.name'>
<button @click='add'>添加</button>

  <ul id="text">
    <li v-for='info in infos'>
        {{info.name}}
        <div :class="info.name ===''?'none':''"><button @click='yc(info)'>移除</button></div>
    </li>
  </ul>
</div>
</body> -->
<script type='ecmascript-6'>
var first = '223aaa';
var last = 'jask';
var a ={
  1: 1,
  2: 2,
  3: 3
}
aa(a);
function aa(a){
  console.log(a[1]);
}
// export {first,last};

// var input =  new Vue({
//   el:"#info",
//   data:{
//     array:{},
//     infos:[
//       {name:''},
//       {name:''}
//     ]
//   },
//   methods:{
//     add:function(){
//       this.infos.push(this.array);
//       this.array = {name:''};
//     },
//     yc:function(index){
//       this.infos.splice(this.infos.indexOf(index),1);
//     }
//   }
// })
</script>
<!-- </html> -->
