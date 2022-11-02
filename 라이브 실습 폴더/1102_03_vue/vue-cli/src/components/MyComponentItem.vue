<template>
  <div >
    <h3>나는 MyComponent의 하위 컴포넌트</h3>
    <p> {{ staticProps}} </p>
    <p> {{ dynamicProps}} </p>
    <button @click="childToParent">클릭!</button>

    <!-- 사용자 입력값 받아서 올려서 출력해보기 -->
    <input type="text" v-model="childInputData"
    @keyup.enter="childInput">

  </div>
</template>

<script>


export default {
  name: 'MyComponentItem',
  props: { // 내가 이걸 받았다. 여기서 사용할것이다 선언.
    staticProps: String,
    dynamicProps: String,
  },
  data: function () {
    return {
      childInputData: null,
    }
  },

  methods: {
    childToParent: function () {
      this.$emit('showmethemoney','나는 자식이 보낸 데이터다')
      //첫번째인자는 emit이벤트의 이름이다.
      //두번째 인자부터는 데이터다.
    },
    childInput: function name() {
      this.$emit('child-input', this.childInputData)
      this.childInputData = null
    }
  },
  
}
</script>

<style>

</style>