module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn("contacts", "status", {
            type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            allowNull: false,
            defaultValue: "ACTIVE",
        }),

    down: (queryInterface) =>
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.removeColumn("contacts", "status", {
                transaction,
            });
            await queryInterface.sequelize.query(
                "DROP TYPE enum_contacts_status",
                {
                    transaction,
                }
            );
        }),
};
