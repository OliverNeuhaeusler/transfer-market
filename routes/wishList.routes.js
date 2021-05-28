import express from 'express';
import {
  getWischlist,
  postWischlist,
} from '../controller/wishList.controller.js';

const router = express.Router();

router.post('/wishlist/:clubId', postWischlist);
router.get('/wishlist/:clubId', getWischlist);

export default router;
