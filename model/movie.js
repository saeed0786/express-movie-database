// const {sequelize} = require('../db')
const { DataTypes, Model, sequelize } = require('../db')

class Movie extends Model {}

Movie.init({
  movie_id: DataTypes.INTEGER,
  movie_title: DataTypes.STRING
}, {
  sequelize,
  timestamps: false
})

module.exports = {Movie};


