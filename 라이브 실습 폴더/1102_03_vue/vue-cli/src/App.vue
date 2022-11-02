<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- 3. 보여주기 -->
    <MyComponent/>
    
    <HelloWorld msg="Welcome to Your Vue!!!.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 1. 불러오기
// import MyComponent from './components/MyComponent.vue'
import MyComponent from '@/components/MyComponent' //@는 src를 의미하는 절대 경로임. @이후 코드를 쓰겠다.
// 확장자가 .vue 라면 .vue는 굳이 안써도 된다.


export default {
  name: 'App',
  components: {
    HelloWorld,

    //2. 등록하기
    MyComponent,
    // MyComponentItem,
  }
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
