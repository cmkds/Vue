<template>
  <div>

    <!-- <h2>VideoList</h2> -->

    <VideoListItem
    
      v-for="video in videos" :key="video.id.videoId" :video="video"
      @select-video="selectVideo"
    
    />

  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue';

export default {
  name:'VideoList',
  components:{
    VideoListItem,
  },
  props:{
    videos: Array,
  },
  methods:{
    selectVideo(video){
      this.$emit('select-video',video)
    }
  }

}
</script>

<style>

</style>