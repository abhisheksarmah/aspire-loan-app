import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInUser: JSON.parse(localStorage.getItem("user")) || {},
  },
  getters: {
    loggedInUser: (state) => state.loggedInUser,
  },
  mutations: {
    SET_LOGGED_IN_USER(state, payload) {
      state.loggedInUser = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      localStorage.setItem("user", JSON.stringify(payload));
      commit("SET_LOGGED_IN_USER", JSON.parse(localStorage.getItem("user")));
    },
    logOut({ commit }) {
      localStorage.removeItem("user");
      commit("SET_LOGGED_IN_USER", {});
    },
  },
});

export default store;
