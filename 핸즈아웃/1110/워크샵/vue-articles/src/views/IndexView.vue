<template>
  <div>
    <h1>Articles</h1>
    <!-- {{ articles }} -->
    <article-item/>


  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import ArticleItem from '../components/ArticleItem.vue'

export default {
  components: { ArticleItem },
  name:'IndexView',
  component:{
    ArticleItem
  },

  data(){
    return{

    }
  },
  computed:{
    articles(){
      return this.$store.state.articles
    }
  }


}
</script>

<style>

</style>