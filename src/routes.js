const { Router } = require("express");
const routes = Router();

const customers = require('./app/controllers/CustomersController')

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show)
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("customers/:id", customers.destroy);

module.exports = routes;
