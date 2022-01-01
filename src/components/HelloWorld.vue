<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="test2">点击</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent } from "vue";
import { TestInfo } from '@/api/login'

export default defineComponent({
  props: ['msg'],
  setup() {
    //引用全局变量
    const test2 = ()=>{
      let promise = TestInfo.login({a:123});
    }
    return {
      test2
    }
  }
})

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
