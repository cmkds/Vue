<template>
  <div id="app">
    <TheLunch @lunch-random="myLunch" />
    <TheLotto :lunch-menu="todayLunch" :is-is="isActive"/>
  </div>
</template>

<script>
import TheLotto from '@/components/TheLotto.vue'
import TheLunch from '@/components/TheLunch.vue'


export default {
  name: 'App',
  components: {
    TheLotto,
    TheLunch,

  },
  data: function(){
    return{
      todayLunch: null,
      isActive: false,
    }
  },
  methods: {
    myLunch: function(lunch){
      this.todayLunch = lunch
      this.isActive = true
      // console.log(this.isActive)
      // console.log(this.todayLunch)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
