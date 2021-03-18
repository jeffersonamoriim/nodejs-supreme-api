import Sequelize, { Model } from "sequelize";
// eslint-disable-next-line import/no-cycle
import User from "./User";

class File extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
            },
            {
                sequelize,
                scopes: {
                    default: {
                        attributes: {
                            exclude: [""],
                        },
                        include: {
                            model: User,
                            required: false,
                            attributes: {
                                exclude: ["file_id", "fileId"],
                            },
                        },
                    },
                },
                name: {
                    singular: "file",
                    plural: "files",
                },
            }
        );
    }

    static associate(models) {
        this.hasMany(models.User);
    }
}

export default File;
