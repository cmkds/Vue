// App.vue

<template>
  <div id="app">
    <p>Counter: {{ counter }}</p>
    <p>Counter x2: {{ counterDouble }}</p>
    <p></p>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
  </div>
</template>

<script>
export default {
  name: 'App', 
  // data: function() {
  //   return {
  //     counter: 0,
  //   }
  // },
  methods: {

    increase() {
      this.$store.dispatch('increase')
    },
    decrease() {
      this.$store.dispatch('decrease')
    },
    // increase: function () {
    //   this.counter += 1
    // },
    // decrease: function () {
    //   this.counter -= 1
    // },
  },
  computed: {
    counter(){
      return this.$store.state.counter
    },

    counterDouble() {
      return this.$store.getters.counterDouble
    }

    // counterDouble: function () {
    //   return this.counter * 2
    // },
  },
}
</script>

<style>
</style>