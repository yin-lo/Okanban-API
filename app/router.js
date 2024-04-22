import { Router } from 'express';

import listController from './controllers/listController.js';

const router = Router();

// Routes for LIST
router.get('/lists', listController.getAllLists);
router.post('/lists', listController.addList);

router.get('/lists/:id', listController.getOneList);
router.patch('/lists/:id', listController.updateList);
router.delete('/lists/:id', listController.deleteList);

export default router;
