import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
  name: String,
  stadium: String,
  manager: String,
  budget: Number,
});

const Club = mongoose.model('Clubs', clubSchema);

export default Club;
