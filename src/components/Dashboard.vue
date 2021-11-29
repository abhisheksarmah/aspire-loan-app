<template>
  <Layout>
    <main class="container mx-auto p-16">
      <div>
        <p class="mb-2 text-sm">Pending Repayment</p>
        <div class="flex justify-between mb-8">
          <div class="flex items-center">
            <span class="text-3xl font-bold">{{
              (loggedInUser.amount -
                (loggedInUser.amount / loggedInUser.tenure) *
                  loggedInUser.emi_paid)
                | currency
            }}</span>
          </div>
          <button
            @click.prevent="logOut"
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
            <span class="font-medium">Sign Out</span>
          </button>
        </div>
      </div>
      <div class="mt-6 py-10 shadow-lg rounded-lg">
        <div class="max-w-7xl mx-auto px-10">
          <div class="">
            <div class="grid grid-cols-2 gap-10">
              <div>
                <div class="border overflow-hidden rounded-lg">
                  <RecentTransactions title="Emi transactions" />
                  <ul class="p-6">
                    <li
                      class="flex justify-between py-4"
                      v-for="(i, index) in loggedInUser.tenure"
                      :key="index"
                      :class="{
                        'pt-0': i === 1,
                        'pb-0': i === loggedInUser.tenure,
                        'border-b-0': i === loggedInUser.tenure,
                        'border-b border-gray-100': i !== loggedInUser.tenure,
                      }"
                    >
                      <div class="flex w-full">
                        <div
                          class="
                            h-12
                            w-12
                            rounded-full
                            flex
                            items-center
                            justify-center
                          "
                          :class="{
                            'bg-light-blue-icon': i % 1 === 0,
                            'bg-light-green-icon': i % 2 === 0,
                            'bg-light-red-icon': i % 3 === 0,
                          }"
                        >
                          <span>{{ index + 1 }}</span>
                        </div>
                        <div class="flex flex-col ml-3 flex-grow">
                          <div class="flex justify-between items-center mb-2">
                            <span
                              class="text-green text-sm font-medium mt-1"
                              v-if="loggedInUser.emi_paid >= index + 1"
                              >Repaid</span
                            >
                            <span v-else class="text-sm font-medium mt-1"
                              >Not paid</span
                            >
                            <div class="flex items-center">
                              <span
                                class="text-green font-bold mr-2.5"
                                v-if="loggedInUser.emi_paid >= index + 1"
                                >{{
                                  (loggedInUser.amount / loggedInUser.tenure)
                                    | currency
                                }}
                              </span>
                              <span v-else class="font-bold mr-2.5">{{
                                (loggedInUser.amount / loggedInUser.tenure)
                                  | currency
                              }}</span>
                              <img
                                src="../assets/next.svg"
                                alt=""
                                class="h-3"
                              />
                            </div>
                          </div>
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
                              "
                              :class="{
                                'bg-dark-blue-variant-2':
                                  loggedInUser.emi_paid + 1 === index + 1,
                                'bg-gray-300':
                                  loggedInUser.emi_paid + 1 !== index + 1,
                              }"
                            >
                              <img
                                class="h-2"
                                src="../assets/business-and-finance.svg"
                                alt=""
                              />
                            </div>
                            <template
                              v-if="loggedInUser.emi_paid + 1 === index + 1"
                            >
                              <a
                                href="#"
                                @click.prevent="payNow"
                                v-if="!isLoading"
                                class="text-xs font-medium text-dark-blue"
                                >Pay Now</a
                              >
                              <span
                                v-else
                                class="text-xs font-medium text-gray-300"
                                >Loading...</span
                              >
                            </template>
                            <span
                              v-else-if="loggedInUser.emi_paid < index"
                              class="text-xs font-medium text-gray-500"
                            >
                              Scheduled
                            </span>
                            <span
                              v-else
                              class="text-xs font-medium text-gray-500"
                            >
                              Settled
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div
                  class="px-6 py-8 shadow-lg rounded-lg"
                  :class="{
                    'bg-green': loggedInUser.emi_paid === loggedInUser.tenure,
                    'bg-dark-blue': loggedInUser.emi_paid < loggedInUser.tenure,
                  }"
                >
                  <div class="flex justify-end">
                    <img class="h-6" src="../assets/Logo-invert.svg" />
                  </div>
                  <div class="mt-5">
                    <h2 class="text-white text-xl font-bold tracking-wide">
                      {{ loggedInUser.username }}
                    </h2>
                    <div
                      class="
                        mt-4
                        mb-3
                        flex
                        w-4/5
                        justify-between
                        items-center
                        font-medium
                        text-sm text-white
                      "
                    >
                      {{ loggedInUser.email }}
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
                    <span>Tenure: {{ loggedInUser.tenure }}</span>
                    <span>EMI paid: {{ loggedInUser.emi_paid }} Months</span>
                  </div>
                </div>
                <!-- Slider buttons starts -->
                <div class="mt-4">
                  <div class="space-x-2 flex justify-center items-center">
                    <span class="h-2 w-4 rounded-lg bg-green"></span>
                    <span class="h-2 w-2 rounded-lg opacity-20 bg-green"></span>
                    <span class="h-2 w-2 rounded-lg opacity-20 bg-green"></span>
                  </div>
                </div>
                <!-- Slider buttons ends -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import RecentTransactions from "./RecentTransactions.vue";
import Layout from "./Layout.vue";
import { mapActions } from "vuex";

export default {
  components: {
    RecentTransactions,
    Layout,
  },
  name: "Dashboard",
  filters: {
    currency: function (value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      });
      return formatter.format(value);
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  methods: {
    ...mapActions(["logOut"]),
    payNow() {
      this.isLoading = true;
      fetch(`/api/loans/${this.loggedInUser.id}/pay`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then(({ user }) => {
          this.$store.dispatch("setUser", user);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
