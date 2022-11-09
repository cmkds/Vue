<template>
  <div>
    <!-- url에 있는 변수 값을 직접 사용하는 것. 직접접근하는 방식은 좋은 방식이 아님. -->
    <h1>hello, {{ $route.params.userName }}</h1>
    
    <!-- 데이터를 인스턴스에 정의하고 그 뷰 모델에 있는 데이터를 쓰는 방식. 이게 더 좋은 방식이다. -->
    <h1>hello, {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloView',
  data(){
    return{
      userName: this.$route.params.userName
    }
  },
  //컴포넌트를 재사용하더라도 라우터가 이동하도록 한다. 파라미터의 변화를 감지하도록 한 것.
  // 해당 컴포넌트를 렌더링하는 경로가 변경될 때 실행하는 컴포넌트 가드다.
  beforeRouteUpdate(to, from, next){
    this.userName = to.params.userName
    next()
  },
}
</script>

<style>

</style>