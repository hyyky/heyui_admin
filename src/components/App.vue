<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

import store from 'js/vuex/store';

export default {
  data() {
    return {
    };
  },
  store,
  mounted() {
    let a = [1, 2, 3];
    console.log(store);
  },
  methods: {
  }
};
</script>
