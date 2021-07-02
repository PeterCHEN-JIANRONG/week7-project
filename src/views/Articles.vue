<template>
  <div class="container">
    <h1>部落格</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic" @click="$router.push(`/article/${article.id}`)">
          <div class="card">
            <img :src="article.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/article/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                文章頁面
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      pagination: {},
      currentPage: 1,
    };
  },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        }
      });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
