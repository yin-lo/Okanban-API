import sequelize from '../db/client.js';

const { DataTypes, Model } = require('sequelize');

class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'tag',
});

export default Tag;
