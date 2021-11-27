<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <span data-feather="home"></span>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Integrations
                </a>
              </li>
            </ul>

            <h6
              class="
                sidebar-heading
                d-flex
                justify-content-between
                align-items-center
                px-3
                mt-4
                mb-1
                text-muted
              "
            >
              <span>Saved reports</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="container my-4">
            <h2>Hi, {{ loggedInUser.username }}</h2>
            <h5 class="mb-3">Here is your detailed loan repayment breakup</h5>
            <div class="row align-items-center">
              <div class="col-md-5">
                <div class="table-responsive border rounded">
                  <table class="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Tenure</th>
                        <th scope="col">EMI</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(i, index) in loggedInUser.tenure"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>
                          {{
                            (loggedInUser.amount / loggedInUser.tenure)
                              | currency
                          }}
                        </td>
                        <td v-if="loggedInUser.emi_paid >= index + 1">
                          <span class="badge rounded-pill bg-success"
                            >Repaid</span
                          >
                        </td>
                        <td v-else-if="loggedInUser.emi_paid + 1 === index + 1">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                            @click="payNow"
                            v-if="!isLoading"
                          >
                            Pay Now
                          </button>
                          <button
                            class="btn btn-outline-primary btn-sm"
                            type="button"
                            disabled
                            v-else
                          >
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Loading...
                          </button>
                        </td>
                        <td v-else>
                          <span class="badge rounded-pill bg-warning text-body"
                            >Scheduled</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Loan Details</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      {{ loggedInUser.amount | currency }}
                    </h6>
                    <span class="badge rounded-pill bg-primary">{{
                      loggedInUser.tenure === loggedInUser.emi_paid
                        ? "Repaid"
                        : "Not Paid"
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
