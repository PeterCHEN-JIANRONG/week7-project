<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container">
    <h1>優惠券</h1>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @get-products="getCoupons"></Pagination>
    </div>
  </div>
  <DelModal ref="delModal" :item="tempCoupons" @del-item="delCoupons"></DelModal>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      coupons: {},
      tempCoupons: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      pagination: {},
      currentPage: 1,
      isLoading: false,
      isNew: false,
    };
  },
  components: { Pagination, DelModal },
  methods: {
    getCoupons(page = 1) {
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;
        this.isLoading = false;
      });
    },
    delCoupons(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.$httpMessageState(res, '刪除優惠券');
          this.$refs.delModal.hideModal();
          this.getCoupons(this.currentPage);
        } else {
          this.$httpMessageState(res, '刪除優惠券');
          this.isLoading = false;
        }
      });
    },
    openCouponModal(item) {
      console.log(item);
    },
    openDelCouponModal(item) {
      this.tempCoupons = { ...item };
      this.$refs.delModal.openModal();
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
