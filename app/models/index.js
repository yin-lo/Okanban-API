import sequelize from '../db/client.js';
import List from './List.js';
import Card from './Card.js';
import Label from './Label.js';

// List <-> Card
List.hasMany(Card, {
  foreignKey: 'list_id',
  as: 'cards',
});
Card.belongsTo(List, {
  foreignKey: 'list_id',
  as: 'list',
});

// Card <-> Label
Card.belongsToMany(Label, {
  through: 'card_has_label',
  foreignKey: 'card_id',
  otherKey: 'label_id',
  as: 'labels',
});
Label.belongsToMany(Card, {
  through: 'card_has_label',
  foreignKey: 'label_id',
  otherKey: 'card_id',
  as: 'cards',
});

export {
  List,
  Card,
  Label,
  sequelize,
};
