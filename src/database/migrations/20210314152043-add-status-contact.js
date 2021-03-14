module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn("contact", "status", {
            type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            default: "ACTIVE",
            allowNull: false,
        }),
    down: (queryInterface) =>
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.removeColumn("contact", "status", {
                transaction,
            });
            await queryInterface.sequelize.query(
                "DROP TYPE enum_contact_status",
                transaction
            );
        }),
};
