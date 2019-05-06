<style lang="scss" scoped>
.void-wrapper {
  display: inline-block;
  width: 100%;
  text-align: center;
  .void-logo {
    img {
      width: 359px;
      height: auto;
    }
  }
  .title {
    color: #333333;
    &.font-size-20 {
      font-size: 20px;
    }
  }
  .desc {
    color: #999999;
    cursor: pointer;
    &.font-size-14 {
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="void-wrapper">
    <!-- 空信息提示 -->
    <div class="void-logo">
        <img src="../../assets/img/void-bg.png" alt="" srcset="">
    </div>
    <h1 class="title font-size-20">{{ title }}</h1>
    <a class="desc font-size-14 mt-10" @click="goBack">{{ desc }}</a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
