<template>
  <div>
    <h2>점심 메뉴</h2>
    <button @click="pickLunch">Pick One</button>
  </div>
</template>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script> -->

<script>
import _ from "lodash"
export default {
  name: 'TheLunch',
  data : function() {
    return {
      lunch : ['국밥', '짜장면','햄버거'],
      lunchMenu : null,
    }
    
  },
  methods: {
    
    pickLunch: function(){
      this.lunchMenu = _.sample(this.lunch)
      // console.log(this.lunchMenu)
      this.$emit('lunch-random', this.lunchMenu)
    }
  }
}
</script>

<style>

</style>