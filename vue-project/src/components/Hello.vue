<template>
  <div class="hello">
  <input v-model='newItem' placeholder='add name' @click='addNew()'>
    <h1 v-html='newItem'></h1>
    <ul>
        <li v-for="item in items" :class="[red,{isFinished:item.isFinished}]
        " @click="toggleFinish(item)">
          {{item.label}}
        </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'hello',
  data: function(){
    return {
      title: 'Welcome to Your Vue.js App',
      items: store.fetch(),
      red: 'red',
      newItem:'',
    }
  },
  watch:{
   items: {
    handler: function(items){
    store.save(items);

    },
    deep: true
   }
  },
  methods: {
    toggleFinish: function(item){
      item.isFinished = !item.isFinished;
    },
    addNew: function(){
      if(this.newItem !=''){
        this.items.push({
        label: this.newItem,
        isFinished: false
        })
      }
    this.newItem = ''
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
