import sequelize from '../db/client.js';

const { DataTypes, Model } = require('sequelize');

class List extends Model {}

List.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  tableName: 'list',
});

export default List;
