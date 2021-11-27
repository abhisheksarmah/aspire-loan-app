<template>
  <div>
    <div class="container-fluid pt-3">
      <div class="row">
        <main class="col-md-6 mx-auto ms-sm-auto col-lg-6 px-md-4">
          <h2>Apply for quick loan today!!</h2>
          <form @submit.prevent="registerUser">
            <div class="mb-3 mt-5">
              <label for="username" class="form-label">User Name</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model.trim="$v.form.username.$model"
                :class="{
                  'is-invalid': $v.form.username.$error,
                  'is-valid':
                    !$v.form.username.$error && $v.form.username.required,
                }"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model.trim="$v.form.email.$model"
                :class="{
                  'is-invalid': $v.form.email.$error,
                  'is-valid':
                    !$v.form.email.$error &&
                    $v.form.email.required &&
                    $v.form.email.email,
                }"
              />
            </div>
            <div class="mb-3">
              <label for="amount" class="form-label">Amount</label>
              <input
                type="number"
                class="form-control"
                id="amount"
                v-model.trim="$v.form.amount.$model"
                :class="{
                  'is-invalid': $v.form.amount.$error,
                  'is-valid':
                    !$v.form.amount.$error &&
                    $v.form.amount.required &&
                    $v.form.amount.numeric,
                }"
              />
            </div>
            <fieldset>
              <legend class="col-form-label">Tenure</legend>
              <div class="mb-3">
                <div
                  class="form-check form-check-inline"
                  v-for="(tenure, index) in tenures"
                  :key="index"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="tenure"
                    :id="`tenureRadio${index}`"
                    :value="tenure"
                    v-model.trim="$v.form.tenure.$model"
                    :class="{
                      'is-invalid': $v.form.tenure.$error,
                      'is-valid':
                        !$v.form.tenure.$error &&
                        $v.form.tenure.required &&
                        $v.form.tenure.mustBeValidTenure,
                    }"
                  />
                  <label
                    class="form-check-label"
                    :for="`tenureRadio${index}`"
                    >{{ tenure }}</label
                  >
                </div>
              </div>
            </fieldset>
            <button type="submit" class="btn btn-primary">Apply Now</button>
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
