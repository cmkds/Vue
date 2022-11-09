<template>
  <div class="about">
    <h1>This is an about page</h1>
  
    <!-- 선언적 방식 -->
    <router-link :to="{name: 'home'}">홈으로!</router-link>

    <!-- 프로그래밍 방식 -->
    <button @click="toHome">홈으로!</button>

    <input 
      type="text"
      v-model.trim="params"
      @keyup.enter="goParams"
    >
  
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    toHome() {
      this.$router.push({ name:'home'})
      //홈으로 이동하는 프로그래밍적 이동 코드
    },
    goParams(){
      if(this.params){
        this.$router.push(
          {
            name:'hello',
            //위의 데이터에 접근할때는 this. 작성하기.
            params: {userName: this.params} 
          })
      }
    }
  },
  data(){
    return {
      params : null,
    }
  },

}
</script>