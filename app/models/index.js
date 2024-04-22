import sequelize from '../db/client.js';
import List from './list.js';
import Card from './card.js';
import Tag from './tag.js';

// Card <-> List (One-to-Many)
// List has many Cards
List.hasMany(Card, {
  foreignKey: 'list_id',
  as: 'cards',
});

// One card belongs to a list
Card.belongsTo(List, {
  foreignKey: 'list_id',
  as: 'list',
});

// ---------------------------- //

// Card <-> Tag (Many-to-Many)
// Cards belong to many Tags
Card.belongsToMany(Tag, {
  through: 'card_has_tag',
  as: 'tags',
  foreignKey: 'card_id',
  otherKey: 'tag_id',
});

// Tags belong to many Cards
Tag.belongsToMany(Card, {
  through: 'card_has_tag',
  as: 'cards',
  foreignKey: 'tag_id',
  otherKey: 'card_id',
});

export {
  List,
  Card,
  Tag,
  sequelize,
};
