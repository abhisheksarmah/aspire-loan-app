<template>
  <main class="container mx-auto p-16">
    <div>
      <p class="mb-2 text-sm">Available balance</p>
      <div class="flex justify-between mb-8">
        <div class="flex items-center">
          <div
            class="
              mr-3
              w-10
              h-6
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-sm
              rounded-md
              bg-green
            "
          >
            S$
          </div>
          <span class="text-3xl font-bold">3,000</span>
        </div>
        <div
          class="
            py-2
            px-4
            rounded-md
            flex
            items-center
            text-white text-sm
            bg-dark-blue-variant-2
          "
        >
          <img src="../assets/box.svg" alt="" class="mr-2" />
          <span class="font-medium">New card</span>
        </div>
      </div>
      <div class="flex space-x-8 text-xl">
        <div class="pb-2 border-b-2 font-bold">My debit cards</div>
        <div class="pb-2 opacity-30">All company cards</div>
      </div>
    </div>
    <div class="mt-6 py-10 shadow-lg rounded-lg">
      <div class="max-w-7xl mx-auto px-10">
        <div class="">
          <div class="grid grid-cols-2 gap-10">
            <div>
              <div class="flex justify-end mb-3">
                <img
                  src="../assets/remove_red_eye-24px.svg"
                  alt=""
                  class="mr-1.5 h-4"
                />
                <span class="text-green font-bold text-xs"
                  >Show card number</span
                >
              </div>
              <VisaCard />
              <!-- Slider buttons starts -->
              <div class="mt-4">
                <div class="space-x-2 flex justify-center items-center">
                  <span class="h-2 w-4 rounded-lg bg-green"></span>
                  <span class="h-2 w-2 rounded-lg opacity-20 bg-green"></span>
                  <span class="h-2 w-2 rounded-lg opacity-20 bg-green"></span>
                </div>
              </div>
              <!-- Slider buttons ends -->
              <FreezeCard />
            </div>
            <div class="mt-7">
              <CardDetails />

              <div class="border mt-6 overflow-hidden rounded-lg">
                <RecentTransactions />
                <RecentTransactionsList />
              </div>
              <div
                class="
                  rounded-lg
                  py-4
                  flex
                  justify-center
                  items-center
                  mt-6
                  overflow-hidden
                  bg-light-green
                "
              >
                <span class="font-medium text-green"
                  >View all card transactions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VisaCard from "./VisaCard.vue";
import FreezeCard from "./FreezeCard.vue";
import CardDetails from "./CardDetails.vue";
import RecentTransactions from "./RecentTransactions.vue";
import RecentTransactionsList from "./RecentTransactionsList.vue";

export default {
  components: {
    VisaCard,
    FreezeCard,
    CardDetails,
    RecentTransactions,
    RecentTransactionsList,
  },
};
</script>
