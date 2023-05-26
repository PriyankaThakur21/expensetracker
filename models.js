const Sequelize = require('sequelize');
const sequelize = require('./util/database');

const expenses = sequelize.define('Expenses',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    expense: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = expenses;