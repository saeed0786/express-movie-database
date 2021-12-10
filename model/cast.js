const {sequelize} = require('../db');
const { DataTypes, Model, cast } = require('sequelize');


class Cast extends Model {}

Cast.init({
    cast_id: DataTypes.INTEGER,
    role_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    paid_amount: DataTypes.DECIMAL(6,2)
},{
    sequelize,
    timestamps: false
})

module.exports = {Cast}