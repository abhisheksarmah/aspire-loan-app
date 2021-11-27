import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./server";
import store from "./store";

Vue.config.productionTip = false;
// if (process.env.NODE_ENV === "development") {
makeServer();
// }

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
