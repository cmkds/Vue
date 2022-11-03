<template>
  <div class="hello">
    <h1
    @click="printMessage"
    >{{ myMsg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  
  //나는 msg 라는 프로퍼티를 가지고 있다라는 것을 정의해주고 사용해야 한다.
  // 나한태 전달된 속성을 한번 명시 해준다.
  props: {
    myMsg: String
  },
  methods :{
    printMessage(){
      console.log(this.myMsg)
      
      // const a = 1
      // const b = 2
      // const c = 3

      const payload = {
        a:1,
        b:2,
        c:3
      }

      // 이벤트를 발생시키는 동작을 하고 싶다.
      //그게 this.$emit()이라고 보면된다.
      
      // this.$emit('my-event', a,b,c)
      this.$emit('my-event', payload)
    }
  }
}
</script>


