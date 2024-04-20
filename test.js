import { Card, List, Tag } from './app/models/index.js';

async function test() {
  const card = await Card.findByPk(1);
  console.log(card);

  const list = await List.findByPk(1);
  console.log(list);

  const tag = await Tag.findByPk(1);
  console.log(tag);
}

test();
