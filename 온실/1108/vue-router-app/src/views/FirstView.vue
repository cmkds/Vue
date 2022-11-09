<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld
      :message='message'
    />
  </div>
</template>

<script>
import HelloWorld from'@/components/HelloWorld.vue'

export default {
  name: 'FirstView',
  components:{
    HelloWorld,
  },
  data(){
    return{
      message:'첫 번째 페이지입니다'
    }
  },

}
</script>

<style>

</style>