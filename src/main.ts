import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/store/index";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.$cookies.config("7d");

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
