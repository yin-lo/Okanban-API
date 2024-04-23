import { Card, List } from '../models/index.js';



const cardController = {
  async index(req, res) {
    const cards = await Card.findAll({
      where: {
        list_id: req.params.id,
      },
      include: {
        association: 'tags',
      },
      order: [
        ['position', 'ASC'],
        ['created_at', 'DESC'],
      ],
    });

    res.json(cards);
  },

  async show(req, res) {
    const id = Number(req.params.id);
    const card = await Card.findByPk(id, {
      include: 'tags',
    });
    res.json(card);
  },

  async store(req, res) {
    const { content, position, color, list_id } = req.body;

    if (!content || typeof content !== 'string') {
      return res.status(400).json({ error: 'Le paramètre content est invalide' });
    }

    /*  if (isDefinedButNotInt(position)) {
      return res.status(400).json({ error: 'Le paramètre position est invalide' });
    } */

    if (!color || typeof color !== 'string') {
      return res.status(400).json({ error: 'Le paramètre color est invalide' });
    }

    const newCard = await Card.create({
      content,
      position,
      color,
      list_id,
    });

    res.json(newCard);
  },

  async update(req, res) {
    const { id } = req.params;
    const { content, position, color, list_id } = req.body;

    if (typeof content  !== 'string' || typeof color !== 'string') {
      return res.status(400).json({ error: 'Les paramètres content ou color sont invalides' });
    }

    const cardToUpdate = await Card.findByPk(id);

    if (!cardToUpdate) {
      return res.status(404).json({ error: "La carte n'existe pas" });
    }
    //TODO vérifier que list _id existe en bdd

    const updatedCard = await cardToUpdate.update({
      content: content || cardToUpdate.content,
      position: position || cardToUpdate.position,
      color: color || cardToUpdate.color,
      list_id: list_id || cardToUpdate.list_id,
    });

    return res.json(updatedCard);
  },

  async destroy(req, res) {
    const { id } = req.params;
    const card = await Card.findByPk(id);

    if (!card) {
      return res.status(204).json({error: "la ressource n'existe pas"});
    }
    await card.destroy();

    return res.json({message: 'la ressource a été effacée'});
  },
};

export { cardController };
