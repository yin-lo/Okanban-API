import { List } from '../models/index.js';

const listController = {
  async index(req, res) {
    try {
      const lists = await List.findAll({
        include: {
          association: 'cards',
          include: 'tags',
        },

        order: [
          ['position', 'ASC'],
          ['created_at', 'DESC'],
        ],
      });

      res.json(lists);
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error');
    }
  },

  async show(req, res) {
    try {
      // TODO on peut créer un middleware pour l'id
      const id = Number.parseInt(req.params.id, 10);

      if (!Number.isInteger(id)) {
        return res.status(404).json({ message: 'Not found' });
      }
      const list = await List.findByPk(id, {
        include: {
          association: 'cards',
          include: 'tags',
        },
      });

      res.json(list);
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error');
    }
  },

  async store(req, res) {
    try {
      const { title, position } = req.body;

      if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Le paramètre title est invalide' });
      }

      if (isDefinedButNotInt(position)) {
        return res.status(400).json({ error: 'Le paramètre position est invalide' });
      }

      const createList = await List.create({
        title,
        position,
      });

      res.json({ createList });
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error on post !');
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, position } = req.body;

      if (typeof title !== 'string') {
        return res.status(400).json({ error: 'Le paramètre title est invalide' });
      }

      // * Avant de mettre àjour, on doit récupérer une ressource : on s'assure que la liste existe
      const listToUpdate = await List.findByPk(id);

      // * Si la liste n'existe pas, on envoie un 404
      if (!listToUpdate) {
        return res.status(404).json({ error: "La liste n'existe pas" });
      }

      // * Sinon on la met à jour
      const updatedList = await listToUpdate.update({
        title: title || listToUpdate.title,
        position: position || listToUpdate.position,
      });

      return res.json({ list: updatedList });
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error on patch !');
    }
  },

  async destroy(req, res) {
    try {
      const id = Number.parseInt(req.params.id, 10);

      if (!Number.isInteger(id)) {
        return res.status(204).json({ error: "La ressource n'existe pas" });
      }

      const list = await List.findByPk(id);

      if (!list) {
        return res.status(204).json({ error: "La ressource n'existe pas" });
      }

      await list.destroy();

      return res.json({ message: 'La ressource a été effacée' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error servor on delete');
    }
  },
};

export default listController;
