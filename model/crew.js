const {sequelize} = require('../db');
const { DataTypes, Model, crew } = require('sequelize');

class Crew extends Model{}


Crew.init({
    crew_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    producer: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
})

module.exports={Crew}