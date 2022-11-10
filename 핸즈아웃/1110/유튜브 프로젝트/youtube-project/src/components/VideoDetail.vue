<template>
  <div v-if="video" 
style="width:100%;"
  >
    <!-- <h1>VideoDetail</h1> -->
    <!-- <div>{{video}}</div> -->
    <iframe :src="videoURI" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name:'VideoDetail',
  props:{
    video: Object,
  },
  computed:{
    videoURI(){
      const videoId=this.video?.id.videoId
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
}
</script>

<style>

</style>