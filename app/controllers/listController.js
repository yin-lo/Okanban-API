import { List } from '../models/index.js';

const listController = {
  async getAllLists(req, res) {
    try {
      const lists = await List.findAll();

      res.json(lists);
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error');
    }
  },

  async getOneList(req, res) {
    try {
      const id = Number(req.params.id);
      const list = await List.findByPk(id);

      res.json(list);
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error');
    }
  },

  async addList(req, res) {
    try {
      const { title, position } = req.body;
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

  async updateList(req, res) {
    try {
      const { id } = req.params;
      const updataList = await List.update(
        req.body,
        {
          where: { id },
        },
      );
      res.json(updataList);
    } catch (error) {
      console.error(error);
      res.status(500).send('server Error on patch !');
    }
  },

  async deleteList(req, res) {
    try {
      const deleteList = await List.destroy({
        where: { id: req.params.id },
      });
      res.json(deleteList);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error servor on delete');
    }
  },
};

export default listController;
