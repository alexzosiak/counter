import { Router } from 'express';
import * as counterController from '../controllers/counterController';

const router = Router();

router.post('/init', counterController.initCounter);

router.get('/counter/:id', counterController.getCounter);
router.post('/counter/:id', counterController.updateCounter);

router.get('/save/:id', counterController.getSave);
router.post('/save/:id', counterController.addSave);
// router.post('/delete/:id', counterController.deleteSave);

export default router;




