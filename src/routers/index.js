import { Router } from 'express';
const router = Router();
import { mainController } from '../controllers/mainController.js';
import { listController } from '../controllers/listController.js';
import { cardController } from '../controllers/cardController.js';
import { isNumberMiddleware } from '../middlewares/validators.js';
import { tagController } from '../controllers/tagController.js';

// DONE
router.get('/', mainController.index);
// * - `index` : sert à obtenir une liste de ressources : GET : Model.findAll
// DONE

// ------------------- LISTS -------------------------

router.get('/lists', listController.index);
// * - `show` : on obtient le détail d'une ressource : GET Model.findByPk
// DONE
router.get('/lists/:id', isNumberMiddleware, listController.show);
// * - `store` : on persiste la ressource en BDD : POST ou PUT Model.create
// TODO
router.post('/lists', listController.store);
// * - `update` : on persiste la mise à jour : PUT ou PATCH Model.update
// TODO
router.patch('/lists/:id', isNumberMiddleware, listController.update);
// TODO
// * - `destroy` : on efface une donnée : DELETE Model.destroy
router.delete('/lists/:id', isNumberMiddleware, listController.destroy);

// -------------- CARDS ----------------------

router.get('/lists/:id/cards', isNumberMiddleware, cardController.index);

router.get('/cards/:id', isNumberMiddleware, cardController.show);

router.post('/cards', cardController.store);

router.patch('/cards/:id', isNumberMiddleware, cardController.update);

router.delete('/cards/:id', isNumberMiddleware, cardController.destroy);

// --------------- TAGS -------------------------

router.get('/tags', isNumberMiddleware, tagController.index);

export { router };
