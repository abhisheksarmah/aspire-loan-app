<template>
  <div id="app">
    <DesktopPage v-if="showDesktopPage" />
    <template v-else>
      <Dashboard v-if="isLoggedIn" />
      <Login v-else />
    </template>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import DesktopPage from "./pages/Desktop.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Login,
    DesktopPage,
  },
  data() {
    return {
      isDesktopPage: false,
    };
  },
  created() {
    this.$root.$on(
      "show-or-hide-desktop",
      () => (this.isDesktopPage = !this.isDesktopPage)
    );
  },
  computed: {
    isLoggedIn() {
      return Object.keys(this.$store.state.loggedInUser).length === 0
        ? false
        : true;
    },
    showDesktopPage() {
      return this.isDesktopPage;
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
