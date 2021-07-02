<template>
  <div class="container">
    <h1>產品列表</h1>
    <div class="mt-4">
      <!-- 產品列表 -->
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div
                style="height: 100px; background-size: cover; background-position: center"
                v-if="item.imageUrl"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price"
                >原價 {{ $filters.currency(item.origin_price) }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ $filters.currency(item.price) }} 元
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="pushProductPage(item)"
                  :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addCart(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                >
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @get-products="getProducts"></Pagination>
    </div>
  </div>

  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      currentPage: 1,
      isLoading: false,
      loadingStatus: {
        loadingItem: '',
      },
    };
  },
  components: { Pagination },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            this.errorAlert(res.data.message);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    pushProductPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = id;
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            this.isLoading = false;
            this.loadingStatus.loadingItem = '';
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
