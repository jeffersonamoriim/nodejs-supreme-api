import "./database";
import { Op } from "sequelize";
import Customer from "./app/models/Customer";
import Contact from "./app/models/Contact";

class SequelizeDebugger {
    static async run() {
        const customers = await Customer.findAll({
            include: [
                {
                    model: Contact,
                    attributes: {
                        exclude: ["customer_id"],
                    },
                    where: {
                        status: ["ACTIVE"],
                    },
                    required: false,
                },
            ],
            where: {
                status: { [Op.in]: ["ACTIVE", "ARCHIVED"] },
            },
            order: [["name", "ASC"]],
            limit: 2,
            offset: 2 * 2 - 2, // limit * page - limit
        });

        console.log(JSON.stringify(customers, null, 2));
    }
}

SequelizeDebugger.run();
