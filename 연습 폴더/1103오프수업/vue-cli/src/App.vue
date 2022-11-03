<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{message}}
    <!-- <HelloWorld msg="message"/> -->
    <HelloWorld 
      :my-msg="message"
      @my-event="printMessage"

    />
    <!-- 컴포넌트는 템플릿에다 넣어주는 것이 사용하는 것이다. -->
    <!-- HelloWorld라는 객체요소는 msg라는 프로퍼티를 사용할 수 있다. -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: { //컴포넌트는 키 밸류 형태의 오브젝트이다.
    HelloWorld //원래는 HelloWorld: HelloWorld 인데 자바스크립트 안에서 생략할 수 있도록함.           
              //         변수     :  벨류
  },
  data(){
    return{
      message : '내가 작성함',
    }
  },
  methods : {
    // printMessage(a,b,c){
    //   console.log("hahahaha")
    //   console.log(a)
    //   console.log(b)
    //   console.log(c)
    // }

    printMessage(payload){
      console.log(payload.a)
      console.log(payload.b)
      console.log(payload.c)
    }
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
