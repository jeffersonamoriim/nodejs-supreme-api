import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import customers from "./app/controllers/CustomersController";
import contacts from "./app/controllers/ContactsController";
import users from "./app/controllers/UsersController";
import sessions from "./app/controllers/SessionsController";
import auth from "./app/middlewares/auth";
import files from "./app/controllers/FilesController";

const routes = Router();
const upload = multer(multerConfig);

// Sessions
routes.post("/users", users.create);
routes.post("/sessions", sessions.create);

// Auth Middleware
routes.use(auth);

// Customers
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);

// Contacts
routes.get("/customers/:customerId/contacts", contacts.index);
routes.get("/customers/:customerId/contacts/:id", contacts.show);
routes.post("/customers/:customerId/contacts", contacts.create);
routes.put("/customers/:customerId/contacts/:id", contacts.update);
routes.delete("/customers/:customerId/contacts/:id", contacts.destroy);

// Users
routes.get("/users", users.index);
routes.get("/users/:id", users.show);
routes.put("/users/:id", users.update);
routes.delete("/users/:id", users.destroy);

// Files
routes.get("/files", files.index);
routes.get("/files/:id", files.show);
routes.post("/files", upload.single("file"), files.create);
routes.put("/files/:id", upload.single("file"), files.update);
routes.delete("/files/:id", files.destroy);

export default routes;
