import express from 'express';
import {
  postPlayers,
  getPlayers,
  updatePlayers,
  deletePlayers,
} from '../controller/player.controller.js';

const router = express.Router();

router.post('/players', postPlayers);
router.get('/players', getPlayers);
router.put('/players/:playerId', updatePlayers);
router.delete('/players/:playerId', deletePlayers);

export default router;
