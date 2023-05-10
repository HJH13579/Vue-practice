<template>
  <div>
    <h1>Detail</h1>
    <h1>제목 : {{ article?.title }}</h1>
    <h1>내용 : {{ article?.content }}</h1>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data() {
    return {
      article : {}
    }
  },
  methods:{
    fetchArticle(articleId) {
      const articles = this.$store.state.articles
      console.log(articles)
      const article = articles.filter((article) => {
        return article.id == articleId
      })[0]
      this.article = article
    }
  },
  created() {
    const articleId = this.$route.params.id
    // axios.get(하나의 article 가져와줘)
    // this.$store.dispatch('fetchArticle', articleId)
    // 창고에서 하나의 article을 가져온다.

    // axios 대체
    this.fetchArticle(articleId)
  }
}
</script>

<style>

</style>