import mongoose, { Schema } from 'mongoose';

const wischListSchema = new mongoose.Schema({
  clubId: { type: Schema.Types.ObjectId, ref: 'Clubs' },
  players: [{ type: Schema.Types.ObjectId, ref: 'Players' }],
});

const WischList = mongoose.model('WischList', wischListSchema);

export default WischList;
