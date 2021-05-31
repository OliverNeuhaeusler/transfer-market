import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import clubRoutes from './routes/clubs.routes.js';
import playerRoutes from './routes/players.routes.js';
import wischlistRoutes from './routes/wishList.routes.js';

const connectionString = 'mongodb://localhost:27017/transfer-market';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const server = express();
server.use(express.json());
server.use(cors());
server.use(clubRoutes);
server.use(playerRoutes);
server.use(wischlistRoutes);

server.get('/', (req, res) => res.json({ status: 'Server is running. ' }));

server.listen(4000);
