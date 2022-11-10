<template>
  <div id="app">
      <h1>My First Youtube Project</h1>
      
      <TheSearchBar
        @search-to-app="appGetContentFromSearch"
      />
      <br>

      <VideoDetail class="col"
      :video="video"
      />
      <!-- <p>{{content}}</p> -->
      <!-- <p>{{videos}}</p> -->

      <VideoList class="col"
        :videos="videos"
        @select-video="selectVideo"
      />
      
      
  </div>
  
</template>


<script>

import TheSearchBar from '@/components/TheSearchBar.vue';
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'
import axios from 'axios'



const YOUTUBE_API_KEY = 'AIzaSyAWjkCovjnlPBRJd-tQwm8aI6Q-Mr7agoQ'
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,

  },
  data(){
    return{
      content: null,
      videos: [],
      video: null,
    }
  },

  methods:{
    appGetContentFromSearch(content){
      this.content = content

      const params = {
        key:YOUTUBE_API_KEY,
        part:'snippet',
        type:'video',
        q: this.content
      }
      axios({
        method:'get',
        url:YOUTUBE_API_URL,
        params
      })
      .then(response => {
        console.log(response)
        console.log(response.data)
        this.videos = response.data.items
      })
      .catch(error => {
        console.log(error)
      })
      
    },
    selectVideo(video){
      console.log(video)
      this.video = video
    },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
