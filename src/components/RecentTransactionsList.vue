<template>
  <ul class="p-6">
    <li
      class="flex justify-between py-4"
      v-for="i in 4"
      :key="i"
      :class="{
        'pt-0': i === 1,
        'pb-0': i === 4,
        'border-b-0': i === 4,
        'border-b border-gray-100': [1, 2, 3].includes(i),
      }"
    >
      <div class="flex w-full">
        <div
          class="h-12 w-12 rounded-full flex items-center justify-center"
          :class="{
            'bg-light-blue-icon': [1, 4].includes(i),
            'bg-light-green-icon': i === 2,
            'bg-light-red-icon': i === 3,
          }"
        >
          <img
            src="../assets/file-storage.svg"
            alt=""
            v-if="[1, 4].includes(i)"
          />
          <img src="../assets/flights.svg" alt="" v-else-if="i === 2" />
          <img src="../assets/megaphone.svg" alt="" v-else />
        </div>
        <div class="flex flex-col ml-3 flex-grow">
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium mb-1 mt-1">Hamleys</span>
            <div class="flex items-center">
              <span class="text-green font-bold mr-2.5" v-if="i === 1"
                >+ S$ 150
              </span>
              <span class="font-bold mr-2.5" v-else>- S$ 150 </span>
              <img src="../assets/next.svg" alt="" class="h-3" />
            </div>
          </div>

          <span class="text-sm text-secondary mb-3">20 May 2020</span>
          <div class="flex items-center">
            <div
              class="
                mr-2
                h-5
                w-6
                rounded-full
                flex
                items-center
                justify-center
                bg-dark-blue-variant-2
              "
            >
              <img
                class="h-2"
                src="../assets/business-and-finance.svg"
                alt=""
              />
            </div>

            <span class="text-xs font-medium" style="color: #325baf"
              >Refund on debit card</span
            >
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
