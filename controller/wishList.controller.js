import WischList from '../models/wishList.model.js';

const getWischlist = async (req, res) => {
  const clubId = req.params.clubId;
  try {
    const clubWischlist = await WischList.findOne({ clubId }).populate(
      'players'
    );
    res.json(clubWischlist);
  } catch (error) {
    res.json(error);
  }
};

const postWischlist = async (req, res) => {
  const { clubId } = req.params;
  const playerId = req.body.playerId;
  const clubWischlist = await WischList.findOne({ clubId });
  if (clubWischlist) {
    const existingPlayer = clubWischlist.players.some((id) => id == playerId);
    if (existingPlayer) {
      const updatedWischlist = clubWischlist.players.filter(
        (id) => id != playerId
      );
      const newList = await WischList.updateOne(
        { clubId },
        { $set: { players: updatedWischlist } }
      );
      res.json(newList);
    } else {
      clubWischlist.players.push(playerId);
      try {
        const updatedList = await WischList.updateOne(
          { clubId },
          { $set: { players: clubWischlist.players } }
        );
        res.json(updatedList);
      } catch (error) {
        res.json(error);
      }
    }
  } else {
    try {
      const newWischlist = new WischList({ clubId, players: [playerId] });
      newWischlist.save().then((wischlistSaved) => res.json(wischlistSaved));
    } catch (error) {
      res.json(error);
    }
  }
};
export { postWischlist, getWischlist };
