<template>
  <div id="app">
    <header
      class="
        navbar navbar-dark
        sticky-top
        bg-dark
        flex-md-nowrap
        p-0
        shadow-sm
        py-3
      "
    >
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"
        >Aspire App</a
      >
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <a
            class="nav-link px-3"
            href="#"
            @click.prevent="logOut"
            v-if="isLoggedIn"
            >Sign out</a
          >
        </div>
      </div>
    </header>
    <Dashboard msg="Welcome to Your Vue.js App" v-if="isLoggedIn" />
    <Login v-else />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Dashboard,
    Login,
  },
  methods: {
    ...mapActions(["logOut"]),
  },
  computed: {
    isLoggedIn() {
      return Object.keys(this.$store.state.loggedInUser).length === 0
        ? false
        : true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
