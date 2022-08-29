const {Sequelize, DataTypes, Model} = require('sequelize')

//create sequelize connection
const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: 'sqlite', //type of SQL
    storage: './expressmoviedatabase.sqlite',
    logging: false 
})

//export connection
 module.exports = {sequelize, DataTypes, Model}
