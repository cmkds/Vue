<template>
  <div>
    <h2>AppChild</h2>
    <input 
      type="text"
      v-model="child"
      @change="childChange"
    >
    <p>appData: {{appToChild}} </p>
    <p>parentData: {{parentToChild}} </p>
    <p>childData: {{child}} </p>
  </div>
</template>

<script>
export default {
  name : "AppChild",
  props:{
    appToChild : String,
    parentToChild : String,
  },

  data: function(){
    return{
      child: null,
      parent: null,

    }
  },

  methods:{
    childChange: function (){
      this.$emit('child-to-parent', this.child)
    }
  },

}
</script>

<style>

</style>