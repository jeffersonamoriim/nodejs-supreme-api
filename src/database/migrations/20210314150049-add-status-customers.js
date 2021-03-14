module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn("customers", "status", {
            type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            default: "ACTIVE",
            allowNull: false,
        }),
    down: (queryInterface) =>
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.removeColumn("customers", "status", {
                transaction,
            });
            await queryInterface.sequelize.query(
                "DROP TYPE enum_customers_status",
                transaction
            );
        }),
};
