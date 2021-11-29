<template>
  <div
    class="
      p-6
      shadow-xs
      rounded-lg
      text-xs text-center
      bg-lighter-blue
      border border-gray-100
      shadow-xs
    "
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img class="mr-3 h-6" src="../assets/Group 11889-2.svg" />
        <span class="text-dark-blue">{{ title || "Recent transactions" }}</span>
      </div>
      <div>
        <img class="h-5" src="../assets/down-arrow-2.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
