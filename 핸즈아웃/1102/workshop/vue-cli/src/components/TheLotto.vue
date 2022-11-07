<template>
  <div>
    <br>
    {{lunchMenu}}
    <hr>

    <div v-show=lunchMenu>
    <!-- props를 show의 값으로 사용하고 싶을때는 그냥 "" 없이 사용하면 된다. -->
    <!-- <div> -->
      <h2>{{lunchMenu}} 먹고 로또</h2>
      <br>
      <button @click="getLotto">Get Lucky Numbers</button>
      <p> {{ nums }}</p>

    </div>


  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: 'TheLunch',

  props:{
    lunchMenu: String,
    isIs: Boolean,
  },
  data:function(){
    return{
      nums:'',
      isActice: false,
    }
  },

  methods: {
    getLotto: function(){
      const numbers = _.range(1,46)
      this.nums = _.sampleSize(numbers, 6)
    },
  },
}
</script>

<style>

</style>