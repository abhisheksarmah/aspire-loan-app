<template>
  <div>
    <div class="container mx-auto max-w-2xl p-16">
      <div>
        <main>
          <a
            href="#"
            @click.prevent="$root.$emit('show-or-hide-desktop')"
            class="h-8 w-full flex items-center justify-center mb-5"
          >
            <img src="../assets/Logo.svg" />
          </a>
          <h2 class="text-2xl font-medium text-center">
            Apply for quick loan today!!
          </h2>
          <form @submit.prevent="registerUser">
            <div class="mb-3 mt-5">
              <label for="username" class="text-gray-500 mb-2">User Name</label>
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded-md"
                id="username"
                v-model.trim="$v.form.username.$model"
                :class="{
                  'border-red-500': $v.form.username.$error,
                  'border-green-500':
                    !$v.form.username.$error && $v.form.username.required,
                }"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="text-gray-500 mb-2"
                >Email address</label
              >
              <input
                type="email"
                class="w-full p-2 border border-gray-300 rounded-md"
                id="email"
                v-model.trim="$v.form.email.$model"
                :class="{
                  'border-red-500': $v.form.email.$error,
                  'border-green-500':
                    !$v.form.email.$error &&
                    $v.form.email.required &&
                    $v.form.email.email,
                }"
              />
            </div>
            <div class="mb-3">
              <label for="amount" class="text-gray-500 mb-2">Amount</label>
              <input
                type="number"
                class="w-full p-2 border border-gray-300 rounded-md"
                id="amount"
                v-model.trim="$v.form.amount.$model"
                :class="{
                  'border-red-500': $v.form.amount.$error,
                  'border-green-500':
                    !$v.form.amount.$error &&
                    $v.form.amount.required &&
                    $v.form.amount.numeric,
                }"
              />
            </div>
            <fieldset>
              <legend class="text-gray-500 mb-2">Tenure</legend>
              <div class="flex space-x-6">
                <div
                  class="flex items-center"
                  v-for="(tenure, index) in tenures"
                  :key="index"
                >
                  <input
                    class="mr-2"
                    type="radio"
                    name="tenure"
                    :id="`tenureRadio${index}`"
                    :value="tenure"
                    v-model.trim="$v.form.tenure.$model"
                    :class="{
                      'border-red-500': $v.form.tenure.$error,
                      'border-green-500':
                        !$v.form.tenure.$error &&
                        $v.form.tenure.required &&
                        $v.form.tenure.mustBeValidTenure,
                    }"
                  />
                  <label :for="`tenureRadio${index}`">{{ tenure }}</label>
                </div>
              </div>
              <span
                class="text-xs text-red-500 mb-2"
                v-if="$v.form.tenure.$error"
                >Please select a valid tenure</span
              >
            </fieldset>
            <button
              type="submit"
              class="
                mt-3
                py-2
                px-4
                rounded-md
                flex
                items-center
                text-white text-sm
                bg-dark-blue-variant-2
              "
            >
              Apply Now
            </button>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, numeric } from "vuelidate/lib/validators";
const tenures = [3, 6, 9, 12];
const mustBeValidTenure = (value) => tenures.includes(value);

export default {
  name: "Login",
  mixins: [validationMixin],
  data() {
    return {
      tenures,
      form: {
        username: "",
        email: "",
        amount: "",
        tenure: "",
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      amount: {
        required,
        numeric,
      },
      tenure: {
        required,
        mustBeValidTenure,
      },
    },
  },
  methods: {
    registerUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        fetch("/api/users/register", {
          method: "POST",
          body: this.form,
        })
          .then((response) => response.json())
          .then(({ user }) => {
            this.$store.dispatch("setUser", user);
          });
      }
    },
  },
};
</script>
