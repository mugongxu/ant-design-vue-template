<style lang="scss" scoped>
.void-box {
  margin-top: 100px;
}
</style>

<template>
  <div id="page-wrapper">
    <void-template
      class="void-box"
      title="Oh，没有找到您要的资源"
      desc="请重新进入试试" />
  </div>
</template>

<script>
import VoidTemplate from '#/common/voidTemplate';

export default {
  components: { VoidTemplate },
  data() {
    return {};
  }
};
</script>
