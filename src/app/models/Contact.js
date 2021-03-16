import Sequelize, { Model } from "sequelize";
// eslint-disable-next-line import/no-cycle
import Customer from "./Customer";

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            },
            {
                sequelize,
                name: {
                    singular: "contact",
                    plural: "contacts",
                },
                scopes: {
                    withCustomer: {
                        attributes: {
                            exclude: [
                                "customer_id",
                                "customerId",
                                "CustomerId",
                            ],
                        },
                        include: {
                            model: Customer,
                            required: true,
                        },
                    },
                    default: {
                        attributes: {
                            exclude: ["customerId", "customer_id"],
                        },
                    },
                },
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Customer, { foreignKey: "customer_id" });
    }
}

export default Contact;
