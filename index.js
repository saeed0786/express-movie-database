const {sequelize, DataTypes, Model} = require('./db')
const{Movie} = require('./model/movie')
const{Crew} = require('./model/crew')
const{Cast} = require('./model/cast')
// const { Cast } = require('sequelize/dist')

Crew.belongsTo(Movie)
Movie.hasMany(Crew)
Cast.belongsTo(Movie)
Movie.hasMany(Cast)




module.exports = {Movie, Crew, Cast, sequelize}