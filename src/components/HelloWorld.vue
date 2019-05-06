<template>
  <div class="hello">
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary">OK</a-button>
    </a-button-group>
    <a-row>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
