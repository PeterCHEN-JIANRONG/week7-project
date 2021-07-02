<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/index">導覽列</router-link>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carts">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/articles">部落格</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">後台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
  </div>
  <router-view />
</template>
<script>
import emitter from '@/methods/eventBus';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  name: 'Home',
  components: { ToastMessages },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {};
  },
};
</script>
