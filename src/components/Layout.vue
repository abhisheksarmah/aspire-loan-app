<template>
  <div class="flex flex-no-wrap">
    <!-- Sidebar starts -->
    <SideNav />
    <!-- Sidebar ends -->
    <slot></slot>
  </div>
</template>

<script>
import SideNav from "./SideNav";
export default {
  components: {
    SideNav,
  },
};
</script>
