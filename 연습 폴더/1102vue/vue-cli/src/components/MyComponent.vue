<template>
  <div class="border">
    <h1>This is my component</h1>
    <MyChild c-aaa="component에서 aschild로"
    :dynamic-props="bbbbb"
    :a-a="aa"
    
    @child-to-parent="parentGetEvent"

    @ssss = "getDynamicData"
    />
<!-- 여깃 bbbbb가 변수아니면 숫잔데 변수일경우 밑에 함수에서 리턴해줘야한다. -->

</div>
</template>

<script>


import MyChild from '@/components/MyChild.vue'

export default {
  name: 'MyComponent',
  components:{
    MyChild,
  },
  data: function (){
    return {
      bbbbb : "It's in data",
      aa : "aaaaaaaaaaaaa"
    }
  },
  methods:{
    parentGetEvent: function(inputData){
      console.log("자식 컴포넌트에서 발생한 이벤트!")
      console.log(`child component로부터 ${inputData}를 받음!`)
    },
    getDynamicData: function(inputData){
      console.log(`child component로부터 ${inputData}를 입력 받음!`)
    }
  }

}
</script>

<style>
  .border {
    border: solid;
  }

</style>