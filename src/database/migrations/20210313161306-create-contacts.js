module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable("contacts", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "customers",
                    key: "id",
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
            },
        }),
    down: (queryInterface) => queryInterface.dropTable("contacts"),
};
