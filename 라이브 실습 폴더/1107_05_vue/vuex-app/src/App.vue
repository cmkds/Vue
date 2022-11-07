<template>
  <div id="app">
  
    <h1>{{ $store.state.message }}</h1>
    <!-- html에서 store에 바로 접근하는 방법 -->
    
    <h1>{{ message }}</h1>
    <!-- 밑에서 computed한 값을 사용하는 방법 -->
    
    <h2>입력된 문자의 길이는 {{ messageLength222 }}</h2>
    
    
    <input 
      type="text"
      @keyup.enter="changeMessage"
      v-model="inputData"  
    >
    <!-- v-model 을 사용하여 밑에 inputData에 실시간으로 넣어줌 -->

  
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputData: null, 
      a : 1,
      //위에 input 데이터를 받기 위한 변수 설정.
    }
  },
  // components: {

  // },
  ////
  computed: {
    message() {
      return this.$store.state.message
      //위 컴포넌트를 가리키는 this 키워드를 사용해야한다.
    },
    messageLength222() {
      return this.$store.getters.messageLength
    },
  },
  ////
  methods: {
    changeMessage() { // 위에서 엔터누를때 이함수 실행하도록함
      const newMessage = this.inputData // newMessage를 만들어서 인풋데이터를 넣어줌
      // this.$store.dispatch('액션 매서드 이름', 추가데이터)
      this.$store.dispatch('changeMessage', newMessage)
    }
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
