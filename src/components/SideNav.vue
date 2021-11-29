<template>
  <div
    style="min-height: 100vh; width: 20rem"
    class="flex-col justify-between bg-dark-blue"
  >
    <div class="px-8 py-12">
      <a
        href="#"
        @click.prevent="$root.$emit('show-or-hide-desktop')"
        class="h-8 w-full flex items-center"
      >
        <img src="../assets/Logo.svg" />
      </a>
      <p class="pt-3 text-sm text-white opacity-30">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
      <ul class="mt-12">
        <li
          class="
            flex
            w-full
            justify-between
            text-gray-300
            cursor-pointer
            items-center
            mb-12
          "
          v-for="(item, index) in items"
          :key="index"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center font-medium"
            :class="{ 'text-green': index === 1 }"
          >
            <!-- Image binding was not working -->
            <img v-if="index === 0" src="../assets/Home.svg" alt="" />
            <img v-if="index === 1" src="../assets/Card.svg" alt="" />
            <img v-if="index === 2" src="../assets/Payments.svg" alt="" />
            <img v-if="index === 3" src="../assets/Credit.svg" alt="" />
            <img v-if="index === 4" src="../assets/Account.svg" alt="" />
            <span class="text-sm ml-3">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      items: [
        {
          logo: "Home.svg",
          name: "Home",
        },
        {
          logo: "Card.svg",
          name: "Cards",
          active: true,
        },
        {
          logo: "Logo.svg",
          name: "Payments",
        },
        {
          logo: "Credit.svg",
          name: "Credit",
        },
        {
          logo: "Account.svg",
          name: "Settings",
        },
      ],
    };
  },
};
</script>
