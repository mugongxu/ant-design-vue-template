<style lang="scss" scoped>
.main-container {
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
}
</style>

<template>
  <a-layout class="main-container">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          v-for="item in navRouter"
          :key="item.path"
          :index="item.path"
          :selectedKeys="[nav]">
          <router-link
            :to="item.path">
            {{ item.name }}
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { navRouter } from '@/router';

export default {
  name: 'mainContainer',
  data() {
    return {
      navRouter
    };
  },
  computed: {
    nav() {
      return this.$route.path;
    }
  },
  created() {
    console.log(this.navRouter);
  }
};
</script>
