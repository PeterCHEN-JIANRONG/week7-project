<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="my-5 row justify-content-center">
    <div class="col-md-6" v-if="!hasOrder">
      <p class="text-center h1">查無訂單編號</p>
    </div>
    <form class="col-md-6" @submit.prevent="payOrder" v-else>
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button type="submit" class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
      hasOrder: false,
    };
  },
  methods: {
    getOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false;
          console.log(res.data);
          if (res.data.success) {
            if (res.data.order === null) {
              this.hasOrder = false;
              this.order = {
                user: {},
              };
            } else {
              this.hasOrder = true;
              this.order = res.data.order;
            }
          } else {
            this.$httpMessageState(res, res.data.message);
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
    payOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http
        .post(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.getOrder();
          } else {
            this.$httpMessageState(res, res.data.message);
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
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
