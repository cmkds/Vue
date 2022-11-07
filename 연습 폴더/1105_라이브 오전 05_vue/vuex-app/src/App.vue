<template>
  <div id="app">
    <h1> store의 메세지는 이렇게 한번에 뽑을 수 있다. <br> {{ $store.state.message }}</h1>



    <h1> {{ message }}</h1>
    <h1> {{ msgLength }}글글자</h1>
    <h1> {{ dbLength }} 글자2배</h1>
    <input 
      type="text"
      @keyup.enter="changeMsg"
      v-model="inputData"
    >

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      inputData : null,
    }
  },
  
  computed: {
    message() {
      return this.$store.state.message
    },
    msgLength() {
      return this.$store.getters.messageLength
    },
    dbLength() {
      return this.$store.getters.doubleLength
    },
    
  },

  methods: {
    changeMsg() {
      // const newMsg = this.inputData
      this.$store.dispatch('changeMsgStore', this.inputData)
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
