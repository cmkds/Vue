<template>
  <div>
    <button @click="addNum">눌러!</button>
    <p>num: {{num}}</p>
    <p>num2: {{doubleNum}}</p>
    <p>num-state: {{numFromstate}}</p>
    <p>num2-state: {{doubleNumFromGetters}}</p>
    <p>num2-state-1: {{doubleNumFromGetters2}}</p>
    <p>num2-state-2: {{doubleNumFromGetters3}}</p>
  </div>
</template>

<script>
export default {
  name:'HelloWorld',
  data(){
    return{
      num:10,
    }
  },
  computed:{
    doubleNum() {
      return this.num *2
    },
    numFromstate(){
      return this.$store.state.num
    },
    doubleNumFromGetters(){
      return this.$store.getters.doubleNum
    },
    doubleNumFromGetters2(){
      return this.$store.getters.doubleNumMinus1
    },
    doubleNumFromGetters3(){
      return this.$store.getters.doubleNumMinus2
    },
  },
  methods:{
    addNum(){
      // this.num += 1
      // this.$store.commit('ADD_NUM')
      this.$store.dispatch('addNum')
      // this.$store.state.num += 1 이렇게 쓰지 말것. 
    },
  }
}
</script>

<style>

</style>