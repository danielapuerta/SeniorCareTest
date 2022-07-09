'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class residents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  residents.init({
    fullName: DataTypes.STRING,
    age: DataTypes.STRING,
    roomNum: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'residents',
  });
  return residents;
};