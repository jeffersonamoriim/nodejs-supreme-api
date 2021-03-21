import "dotenv/config";
import "express-async-errors";
import Youch from "youch";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import express from "express";
import routes from "./routes";

import "./database";

import sentryConfig from "./config/sentry";

class App {
    constructor() {
        this.server = express();
        Sentry.init({
            sentryConfig,
            integrations: [
                new Sentry.Integrations.Http({ tracing: true }),
                new Tracing.Integrations.Express({ app: this.server }),
            ],
        });
        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.server.use(Sentry.Handlers.requestHandler());
        this.server.use(Sentry.Handlers.tracingHandler());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
        this.server.use(Sentry.Handlers.errorHandler());
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            if (process.env.NODE_ENV === "development") {
                const errors = await new Youch(err, req).toJSON();
                return res.status(500).json(errors);
            }
            return res.status(500).json({ error: "Internal server Error" });
        });
    }
}

export default new App().server;
