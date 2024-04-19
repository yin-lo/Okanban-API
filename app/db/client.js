require('dotenv/config');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscored: true,
  },
});

export default sequelize;
