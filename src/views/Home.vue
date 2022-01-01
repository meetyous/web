<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  components: {
    HelloWorld
  },
  setup () {
    const msg = ref('我是父组件我要在子组件显示')
    return {
      msg
    }
  }
}
</script>
