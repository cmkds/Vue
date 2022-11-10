<template>
  <div>
    <h1>로또</h1>
    <button @click="getLotto">Get Lucky Numbers</button>
    
    <div v-if="numbers">
      <p>{{numbers}}</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash"

export default {
  name:'TheLotto',
  data(){
    return{
      numbers: '',
    }
  },
  methods: {
    getLotto(){
      const num = _.range(1,46)
      this.numbers = _.sampleSize(num, this.$route.params.num)
    },
  },

}
</script>

<style>

</style>