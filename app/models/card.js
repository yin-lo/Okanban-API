import { DataTypes, Model } from 'sequelize';

import sequelize from '../db/client.js';

class Card extends Model {}

Card.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '#BED',
  },
}, {
  sequelize,
  tableName: 'card',
});

export default Card;
