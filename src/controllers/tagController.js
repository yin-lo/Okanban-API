import { Tag, Card } from '../models/index.js';

const tagController = {
  async index(req, res) {
    const tags = await Tag.findAll({
      include: {
        association: 'cards',
      },
      order: [
        ['name', 'ASC'],
        ['created_at', 'DESC'],
      ],
    });

    res.json(tags);
  },

  async store(req, res) {
    const { name, color } = req.body;

    if (!name || typeof name !== 'string' || !color || typeof color !== 'string') {
      return res.status(400).json({ error: 'Les paramètres name ou color sont invalides' });
    }

    const newTag = await Tag.create({
      name,
      color,
    });

    res.json(newTag);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, color } = req.body;

    if (typeof name !== 'string' || typeof color !== 'string') {
      return res.status(400).json({ error: 'Les paramètres name ou color sont invalides' });
    }

    const tagToUpdate = await Tag.findByPk(id);

    if (!tagToUpdate) {
      return res.status(404).json({ error: "La carte n'existe pas" });
    }

    const updatedTag = await tagToUpdate.update({
      name: name || tagToUpdate.name,
      color: color || tagToUpdate.color,
    });

    return res.json(updatedTag);
  },

  async destroy(req, res) {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);

    if (!tag) {
      return res.status(204).json({ error: "la ressource n'existe pas" });
    }
    await tag.destroy();

    return res.json({ message: 'la ressource a été effacée' });
  },

  async edit(req, res) {
    const { id } = req.params;
    const { tag_id } = req.body;

    // const cardToUpdate = await Card.findByPk(id);
    
    // const tagToUpdate = await Tag.findByPk(1);

    // const card = await cardToUpdate.create(tagToUpdate);
    const updatedTag = await tagToUpdate.create({
      where: { tag_id },
      include: {
        association: 'card',
        through: {
          attributes: ['card_id'],
        },
      },
    });
    return res.json(card);
  },
};

export { tagController };
