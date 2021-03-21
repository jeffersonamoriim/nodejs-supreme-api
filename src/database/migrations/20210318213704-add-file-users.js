module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn("users", "file_id", {
            type: Sequelize.INTEGER,
            references: { model: "files", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        }),

    down: (queryInterface) =>
        queryInterface.sequelize.removeColumn("users", "file_id"),
};
