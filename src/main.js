import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/plugins/lodash";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Fragment from "vue-fragment";

Vue.config.productionTip = false;
Vue.use(Toast, {});
Vue.use(Fragment.Plugin);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
