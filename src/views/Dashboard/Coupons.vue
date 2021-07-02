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
          <th>折扣碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`enableSwitch${item.id}`"
                :true-value="1"
                :false-value="0"
                v-model="item.is_enabled"
                @change="updateCouponStatus(item)"
              />
              <label class="form-check-label" :for="`enableSwitch${item.id}`">
                <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                <span v-else class="text-muted">未啟用</span>
              </label>
            </div>
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
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    :is_new="isNew"
    @update-coupon="updateCoupon"
  ></CouponModal>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupons"></DelModal>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';
import CouponModal from '@/components/CouponModal.vue';

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {
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
  components: { Pagination, DelModal, CouponModal },
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
    updateCoupon(item) {
      this.isLoading = true;
      // 新增
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let method = 'post';
      let option = '新增優惠券';
      if (!this.isNew) {
        // 修改
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        method = 'put';
        option = '更新優惠券';
      }
      this.$http[method](url, { data: item }).then((res) => {
        this.$httpMessageState(res, option);
        this.isLoading = false;
        if (res.data.success) {
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        }
      });
    },
    delCoupons(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, '刪除優惠券');
        this.isLoading = false;
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getCoupons(this.currentPage);
        }
      });
    },
    updateCouponStatus(item) {
      this.isNew = false;
      this.tempCoupon = { ...item };
      this.updateCoupon(this.tempCoupon);
    },
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (isNew) {
        this.tempCoupon = {
          is_enabled: 0,
          due_date: Math.floor(new Date().getTime() / 1000),
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delModal.openModal();
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
