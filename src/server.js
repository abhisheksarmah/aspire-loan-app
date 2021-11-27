import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api";

      this.post("/loans/:id/pay", (schema, { params }) => {
        const user = schema.users.find(params.id);
        user.update("emi_paid", user.emi_paid + 1);
        return user;
      });

      this.post("/users/register", (schema, { requestBody }) => {
        let user = schema.users.create({ ...requestBody, emi_paid: 0 });
        return user;
      });
    },
  });

  return server;
}
