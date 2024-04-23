import { Router } from 'express';

import listController from './controllers/listController.js';

const router = Router();

// Routes for LIST
router.get('/lists', listController.index);
router.post('/lists', listController.store);

router.get('/lists/:id', listController.show);
router.patch('/lists/:id', listController.update);
router.delete('/lists/:id', listController.destroy);

export { router };
// avec les accolades, l'export est "nommé".