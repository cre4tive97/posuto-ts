<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/common/AppHeader.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>

<style>
@import "./css/reset.css";
@import "./css/style.css";
#app {
  height: 100vh;
}
</style>
