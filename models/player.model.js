import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  skills: String,
});

const Player = mongoose.model('Players', playerSchema);

export default Player;
