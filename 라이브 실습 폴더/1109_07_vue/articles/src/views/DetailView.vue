<template>
  <div>
    <h1>Detail</h1>
    <p>글 번호 : {{article?.id}}</p>
    <p>글 제목 : {{article?.title}}</p>
    <p>글 내용 : {{article?.content}}</p>
    <!-- <p>글 작성시간 : {{article?.createdAt}}</p> -->

    <p>작성시간: {{articleCreatedAt}}</p>

    <button @click="deleteArticle">삭제</button>

    <router-link :to="{ name: 'index'}">뒤로가기</router-link>

  </div>
</template>

<script>
export default {
  name:'DetailView',

  data(){
    return{
      article: null,
    }
  },

  computed:{
    articles(){
      return this.$store.state.articles
    },
    articleCreatedAt() {
      const article = this.article
      const createdAt = new Date(article?.createdAt).toLocaleString()
      return createdAt
    },
  },


  methods:{
    //파라미터에서 아이디값을 가져와서
    //해당 article을 찾는 함수.
    
    //url로 오는 아이디를 가져와서
    //위에 articles를 반복돌면서 찾아야 한다.
    

    //created 시점에서 id를 받아와서 가져오는 방법.
    getArticleById(id) {
    // getArticleById() {
    // const id = this.$route.params.id
      for (const article of this.articles){
        if (article.id === Number(id)){
          this.article = article
          break
        }
      }
      if (this.article === null){
        this.$router.push({ name: 'NotFound404' })
      }
    },

    deleteArticle() {
      //삭제라서 바로 mutations로 감
      this.$store.commit('DELETE_ARTICLE', this.article.id)
    },

  },
  created() {
    this.getArticleById(this.$route.params.id)
  }

}
</script>

<style>

</style>