import Vue from "vue";
import Vuex from "vuex";
import users from "./users/module";
import auth from "./auth/module";
import post from "./posts/module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    auth,
    post,
  },
});
