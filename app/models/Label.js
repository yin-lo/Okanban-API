import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/client.js';

class Label extends Model {}

Label.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '#0F0',
  },
}, {
  sequelize,
  tableName: 'label',
});

export default Label;
