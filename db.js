const {Sequelize, DataTypes, Model} = require('sequelize')

// const {Sequelize} = require('sequelize')
const path = require('path')

//create sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'express_movie_database.sqlite')
})
sequelize.authenticate().then(console.log("connected")).catch(error=>{console.error('not able to connect',error)});
//export connection
 module.exports = {sequelize, DataTypes, Model}