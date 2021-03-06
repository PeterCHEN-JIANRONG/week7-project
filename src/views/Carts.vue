<template>
  <div class="container">
    <h1 class="text-center">購物車</h1>
    <!-- 購物車列表 -->
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            :disabled="!hasCartsItems"
            @click="deleteAllCarts"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <!-- 判斷 購物車是否有資料 -->
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id"
                  >
                    移除
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <input
                        class="form-control"
                        type="number"
                        min="1"
                        v-model.number="item.qty"
                        @blur="updateCart(item)"
                        :disabled="loadingStatus.loadingItem === item.id"
                      />
                      <span class="input-group-text" id="basic-addon2">
                        {{ item.product.unit }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small v-if="cart.final_total !== cart.total" class="text-success"
                    >折扣價：</small
                  >
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 表單送出 -->
    <div class="my-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email*</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="請輸入 Email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名*</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            placeholder="請輸入姓名"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話*</label>
          <Field
            id="tel"
            name="電話"
            type="text"
            placeholder="請輸入電話"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址*</label>
          <Field
            id="address"
            name="地址"
            type="text"
            placeholder="請輸入地址"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger" :disabled="!hasCartsItems">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>

  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
export default {
  data() {
    return {
      cart: {
        total: 0,
        final_total: 0,
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      hasCartsItems: false,
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      coupon_code: '',
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            this.$httpMessageState(res, res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    updateCart(item) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = item.id;
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .put(url, { data })
        .then((res) => {
          this.isLoading = false;
          this.loadingStatus.loadingItem = '';
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            this.getCart();
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            this.getCart();
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    deleteAllCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            this.getCart();
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    createOrder() {
      this.isLoading = true;
      const order = this.form;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '建立訂單');
          if (res.data.success) {
            this.$router.push(`/checkout/${res.data.orderId}`);
            // 清空表單資料
            this.$refs.form.resetForm();
            this.form.message = '';
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addCouponCode() {
      const data = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(url, { data }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.$httpMessageState(res, '套用優惠券');
          this.getCart();
        } else {
          this.$httpMessageState(res, res.data.message);
        }
      });
    },
  },
  watch: {
    cart() {
      // 購物車是否有資料， length>0:true, length=0:false
      this.hasCartsItems = !!this.cart.carts.length;
    },
  },
  created() {
    this.getCart();
  },
};
</script>
