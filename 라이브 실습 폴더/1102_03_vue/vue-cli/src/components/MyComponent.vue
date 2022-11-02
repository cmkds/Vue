<template>
  <div class="border">

    <h1>싸피 이거는 내가 만든 새로운 컴포넌트다!</h1>
    
    <MyComponentItem static-props="MyComponent에서 보낸 데이터"
    :dynamic-props="dynamicProps"
    @showmethemoney="parentGetEvent"
    @child-input="getDynamicData"





    />

  </div>
  <!-- 이 템플릿을 html 영역이다라고 선언을 하는 곳. 그래서 반드시 최상위 태그가 하나 있어야 에러가 나지 않는다. 굳이 div태그는 아니어도 되고 template 태그가 아닌. 아무 태그가 하나 있어야 한다. template 태그는 단순히 여기가 html 영역이다 라고 표시할 뿐이다. -->

</template>

<script>


//1. 불러오기
// 뷰 cli는 불러오고 안쓰면 에러가 뜬다.
import MyComponentItem from '@/components/MyComponentItem'


export default {


  name: 'MyComponent', //이름을 지어줘야 상위 컴포턴트가 가져갈 수 있다.
  // 상위 컴포넌트는 파일명이 아닌 여기서 작성한 이름을 인식한다. 보통 파일명과 똑같이 작성한다.



  // 2. 등록하기
  components: {
    MyComponentItem,
  },
  data: function() {
    return {
      dynamicProps: '이건 동적인 데이터!',
    }
  },
  methods:{
    parentGetEvent: function (childData){
      console.log('용돈 없어!!')
      console.log(childData)
      this.$emit('oneMoreUp',childData)
    },
    getDynamicData: function(childInputData) {
      console.log(`사용자가 입력한 값은 ${childInputData}입니다.`)
    }
  }
}
</script>

<style>
  .border {
    border: solid 1px black;
  }


</style>