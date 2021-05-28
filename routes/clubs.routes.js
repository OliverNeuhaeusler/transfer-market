import express from 'express';
import {
  deleteClub,
  getClub,
  postClub,
  updateClub,
} from '../controller/club.controller.js';

const router = express.Router();

router.post('/clubs', postClub);
router.get('/clubs', getClub);
router.put('/clubs/:clubId', updateClub);
router.delete('/clubs/:clubId', deleteClub);

export default router;
