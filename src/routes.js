import { Router } from "express";
import customers from "./app/controllers/CustomersController";

const routes = Router();

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("customers/:id", customers.destroy);

export default routes;
