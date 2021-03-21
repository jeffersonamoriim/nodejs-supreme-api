module.exports = {
    up: (queryInterface) => queryInterface.removeColumn("users", "provider"),
    down: (queryInterface, Sequelize) =>
        queryInterface.addColumn("users", "provider", {
            type: Sequelize.BOOLEAN,
            default: false,
            allowNull: false,
        }),
};
