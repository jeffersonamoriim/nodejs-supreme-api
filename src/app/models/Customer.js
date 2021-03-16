import Sequelize, { Model } from "sequelize";
// eslint-disable-next-line import/no-cycle
import Contact from "./Contact";

class Customer extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            },
            {
                sequelize,
                scopes: {
                    actives: {
                        where: {
                            status: "ACTIVE",
                        },
                    },
                    withContacts: {
                        attributes: {
                            exclude: ["customer_id", "customerId"],
                        },
                        include: {
                            model: Contact,
                            required: false,
                        },
                    },
                },
                hooks: {
                    beforeValidate: (customer) => {
                        customer.status = "ARCHIVED";
                    },
                },
                name: {
                    singular: "customer",
                    plural: "customers",
                },
            }
        );
    }

    static associate(models) {
        this.hasMany(models.Contact);
    }
}

export default Customer;
