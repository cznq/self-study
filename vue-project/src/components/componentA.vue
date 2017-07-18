<template>
  <div class="hello">
    <h1 v-html='msgfrom'></h1>
    <button @click='onClickMe'>open mouse!</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function(){
    return {
      newItem:'eeeeeeeeeeeeee',
      msg:'XXXXXXX'
    }
  },
  props:['msgfrom'],// 父级向子级传递数据
  methods: {
  onClickMe: function(){
    this.$emit('child-tell-me', this.msg);
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{
color:red;
}
.isFinished {
text-decoration:underLine;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
