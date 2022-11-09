<template>
  <!-- 이벤트를 할때 인자가 있다면 호출할때 넣어 줄 수 있다.!!! -->
  <div @click="goDetail(article.id)">
    <p>글 번호 : {{article.id}}</p>
    <p>글 제목 : {{article.title}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object,
  },

  methods:{
    //위의 article.id가 여기서 id로 씀
    goDetail(id){
      this.$router.push({name:'detail', params:{id}})

      // this.$router.push({name:'detail', params:{id: `${this.article.id}`}})
    }
  }


}
</script>


<style>

</style>