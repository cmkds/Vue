<template>
  <div>
    <!-- <h1>TheSearchBar</h1> -->
    <input 
      type="text"
      v-model="content"
      @keyup.enter="contentToApp"
    >

  </div>
</template>

<script>
export default {
  name:'TheSearchBar',
  data(){
    return {
      content: null,
    }
  },
  methods:{
    contentToApp(){
      this.$emit('search-to-app', this.content)
      this.content = null
    }
  },

}
</script>

<style>

</style>