import { DataTypes, Model } from 'sequelize';

import sequelize from '../db/client.js';

// const { DataTypes, Model } = require('sequelize');

class Card extends Model {}

Card.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'card',
});

export default Card;
