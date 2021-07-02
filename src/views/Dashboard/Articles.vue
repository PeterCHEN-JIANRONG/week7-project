<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openArticleModal(true)">
        建立新的頁面
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="getArticle(article.id)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelArticleModal(article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ArticleModal
    ref="articleModal"
    :article="tempArticle"
    :is_new="isNew"
    @update-article="updateArticle"
  ></ArticleModal>
  <DelModal ref="delModal" :item="tempArticle" @del-item="delArticle"></DelModal>
</template>
<script>
import ArticleModal from '@/components/ArticleModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
      pagination: {},
      currentPage: 1,
      isLoading: false,
      isNew: false,
    };
  },
  inject: ['emitter'],
  components: { ArticleModal, DelModal },
  methods: {
    getArticles(page = 1) {
      this.currentPage = page;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.articles = res.data.articles;
            this.pagination = res.data.pagination;
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log('error', error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit('push-message', {
            title: '連線錯誤',
            style: 'danger',
            content: error.message,
          });
        });
    },
    getArticle(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.openArticleModal(false, res.data.article);
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log('error', error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit('push-message', {
            title: '連線錯誤',
            style: 'danger',
            content: error.message,
          });
        });
    },
    updateArticle(item) {
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpMethod = 'post';
      let status = '新增貼文';
      // 更新
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`;
        httpMethod = 'put';
        status = '更新貼文';
      }
      this.isLoading = true;
      this.$http[httpMethod](api, { data: item })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, status);
          if (res.data.success) {
            this.$refs.articleModal.hideModal();
            this.getArticles(this.currentPage);
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log('error', error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit('push-message', {
            title: '連線錯誤',
            style: 'danger',
            content: error.message,
          });
        });
    },
    delArticle(item) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`;
      this.isLoading = true;
      this.$http
        .delete(api)
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            this.$refs.delModal.hideModal();
            this.getArticles(this.currentPage);
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log('error', error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit('push-message', {
            title: '連線錯誤',
            style: 'danger',
            content: error.message,
          });
        });
    },
    openArticleModal(isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
      } else {
        this.tempArticle = { ...item };
        this.isNew = false;
      }
      this.$refs.articleModal.openModal();
    },
    openDelArticleModal(item) {
      this.tempArticle = { ...item };
      this.$refs.delModal.openModal();
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
