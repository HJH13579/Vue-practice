<template>
  <div>
    <h1>Index</h1>
    <ArticleItem 
    v-for="article in articles"
    :key="article.id"

    :article="article"
    />
  </div>
</template>

<script>
import ArticleItem from '../components/ArticleItem.vue'

export default {
  name: 'IndexView',
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
  created() {
    // 장고에게 axios 요청을 보내서 state에 있는 articles를 채워줘야합니다.
    // axios 요청을 통해서 받았다고 가정 => actions로 들어감
    this.$store.dispatch('fetchArticles')

    // articles = [
    //   {
    //     id: 1,
    //     title: '제목1',
    //     content: '내용1',
    //   },
    //   {
    //     id: 2,
    //     title: '제목2',
    //     content: '내용2',
    //   }
    // ]
  }
}
</script>

<style>

</style>