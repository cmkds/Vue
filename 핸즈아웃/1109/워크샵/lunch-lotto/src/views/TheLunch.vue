<template>
  <div>
    <h1>점심메뉴</h1>
    <button @click="pickLunch">Pick Lunch</button>
    <div v-if='lunchPick'>
       <br>
       {{lunchPick}}
       <br>
       <br>
       <h2>로또를 뽑아 보자</h2>
       <button @click="goLotto">Pick Lotto</button>
    </div>

  </div>
</template>

<script>
import _ from "lodash"

export default {
  name:'TheLunch',
  data(){
    return {
      lunch : ['국밥','짜장면','햄버거'],
      lunchMenu: null,
    }
  },
  methods: {
    pickLunch(){
      this.lunchMenu = _.sample(this.lunch)
      this.$store.dispatch('pickLunch', this.lunchMenu)
    },
    goLotto(){
      this.$router.push({name:'lotto', params: {num: '6' }})
    }
  },
  computed:{
    lunchPick(){
      return this.$store.state.lunch
    },
  },
}
</script>

<style>

</style>