import { Card } from './app/models/index.js';

const run = async () => {
  try {
    const cards = await Card.findAll({
      include: [{
        association: 'labels',
      }, {
        association: 'list',
      }],
    });
    console.log(JSON.stringify(cards, null, 2));
  } catch (error) {
    console.error(error);
  }
};

run();
