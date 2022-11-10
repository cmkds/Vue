<template>
  <div>
    <hr>
    <div @click="selectVideo">
      <img :src="video.snippet.thumbnails.default.url" alt="">
      <p>{{video.snippet.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props:{
    video:Object,
  },
  methods:{
    selectVideo(){
      this.$emit('select-video',this.video)
    }
  }
}
</script>

<style>

</style>