<template>
  <div class="container">
    <h1>產品頁</h1>
    <h2>{{ product.title }}</h2>
    <div class="row">
      <div class="col-sm-6">
        <img class="img-fluid mb-4" :src="product.imageUrl" alt="" />
        <img class="img-fluid mb-1" v-for="item in product.imagesUrl" :src="item" :key="item" />
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div class="h5" v-if="!product.price">{{ $filters.currency(product.origin_price) }} 元</div>
        <del class="h6" v-if="product.price"
          >原價 {{ $filters.currency(product.origin_price) }} 元</del
        >
        <div class="h5" v-if="product.price">
          現在只要 {{ $filters.currency(product.price) }} 元
        </div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" v-model.number="qty" min="1" />
            <button type="button" class="btn btn-primary" @click="addCart">
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <!-- col-sm-6 end -->
    </div>
  </div>

  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      product: {
        origin_price: 0,
        price: 0,
      },
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    getProduct(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
          } else {
            this.$httpMessageState(res, res.data.message);
          }
          this.isLoading = false;
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addCart() {
      this.isLoading = true;
      const data = {
        product_id: this.product.id,
        qty: this.qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          this.$httpMessageState(res, res.data.message);
          this.isLoading = false;
          if (res.data.success) {
            this.qty = 1;
            // this.$router.push('/products');
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  created() {
    // const { id } = this.$route.params;
    this.getProduct(this.id);
  },
};
</script>
