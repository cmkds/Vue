<template>
  <div>
    <h3>This is child component</h3>
    <p>{{ cAaa }}</p>
    <p>{{ aA }}</p>
    <p>{{ dynamicProps }}</p>

    <button @click="ChildToParent">
      클릭!
    </button>

    <input 
    type="text"
    v-model="childInputData"
    @keyup.enter="childInput"
    >

  </div>
</template>

<script>
export default {
  name: 'MyChild',
  props :{
    cAaa: String,
    dynamicProps: String,
    aA : String,
  },
  data: function(){
    return {
      childInputData: null,
    }
  },

  methods: {
    ChildToParent: function(){
      this.$emit('child-to-parent', 'child data')
    },
    childInput : function(){
      this.$emit('ssss', this.childInputData)
      this.childInputData =""
    }
  }
}
</script>

<style>

</style>