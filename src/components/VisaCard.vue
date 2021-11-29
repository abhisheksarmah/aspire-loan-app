<template>
  <div class="p-6 shadow-lg rounded-lg bg-green">
    <div class="flex justify-end">
      <img class="h-6" src="../assets/Logo-invert.svg" />
    </div>
    <div class="mt-7">
      <h2 class="text-white text-xl font-bold tracking-wide">Mark Henry</h2>
      <div class="mt-8 mb-3 flex w-4/5 justify-between items-center">
        <div class="space-x-2 flex items-center" v-for="i in 3" :key="i">
          <div
            v-for="i in 4"
            :key="i"
            class="bg-white h-2 w-2 rounded-lg"
          ></div>
        </div>
        <div class="space-x-1 text-white text-xs font-bold">
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>0</span>
        </div>
      </div>
    </div>
    <div
      class="
        w-1/2
        flex
        justify-between
        items-center
        text-xs text-white
        font-bold
      "
    >
      <span>Thru: 12/20</span>
      <div class="flex items-center">
        <span>CVV:</span>
        <div class="space-x-1 ml-2 mt-2 text-xl">
          <span>&ast;</span>
          <span>&ast;</span>
          <span>&ast;</span>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-1">
      <img src="../assets/Visa.svg" alt="" />
    </div>
  </div>
</template>
