<template>
  <div class="container">
    <h1>產品管理列表</h1>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="item.id"
                :checked="item.is_enabled ? true : false"
                :disabled="isLoading"
                @change="updateProductStatus(item)"
              />
              <label class="form-check-label" :for="item.id">
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-danger">未啟用</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="text-end">
      目前有 <span id="productCount">{{ products.length }}</span> 項產品
    </p>

    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @get-products="getProducts"></Pagination>
    </div>
  </div>

  <!-- vue-loading -->
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <!-- ProductModal -->
  <ProductModal
    ref="productModalA"
    @update-product="updateProduct"
    :product="tempProduct"
    :isNew="isNew"
    :sell-status-options="sellStatusOptions"
  ></ProductModal>
  <!-- DelModal -->
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      currentPage: 1,
      isNew: false,
      isLoading: false,
      productModal: null,
      sellStatusOptions: [
        '店長推薦',
        '本週暢銷商品',
        '本週銷售冠軍',
        '本月暢銷商品',
        '本月銷售冠軍',
      ],
    };
  },
  components: {
    Pagination,
    ProductModal,
    DelModal,
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            this.$httpMessageState(res, '載入產品');
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateProduct(item) {
      this.tempProduct = { ...item };
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      let status = '新增產品';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = 'put';
        status = '更新產品';
      }
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        if (res.data.success) {
          this.$httpMessageState(res, status);
          this.productModal.hideModal();
          this.getProducts(this.currentPage);
        } else {
          this.$httpMessageState(res, status);
        }
      });
    },
    updateProductStatus(item) {
      this.tempProduct = { ...item };
      // 狀態反向
      this.tempProduct.is_enabled = this.tempProduct.is_enabled ? 0 : 1;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      const status = '更新產品';
      this.isLoading = true;
      this.$http.put(api, { data: this.tempProduct }).then((response) => {
        if (response.data.success) {
          this.$httpMessageState(response, status);
          this.productModal.hideModal();
          this.getProducts(this.currentPage);
        } else {
          this.$httpMessageState(response, status);
        }
      });
    },
    delProduct(item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '刪除產品');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
    openModal(isNew, item) {
      // isNew: true新增, false編輯 product
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
        this.currentPage = 1; // 新增:回第一頁
      } else {
        // this.tempProduct = { ...item };
        this.tempProduct = JSON.parse(JSON.stringify(item));
        this.isNew = false;
        this.currentPage = this.pagination.current_page; // 更新:回當前頁
      }
      this.productModal.openModal();
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.productModal = this.$refs.productModalA;
  },
};
</script>
