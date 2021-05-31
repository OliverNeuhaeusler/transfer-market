import Player from '../models/player.model.js';

function postPlayers(req, res) {
  const player = new Player({
    name: req.body.name,
    price: req.body.price,
    skills: req.body.skills,
    free_transfer: req.body.free_transfer,
    club: req.body.club,
    position: req.body.position,
    email: req.body.email,
  });
  player
    .save()
    .then((playerSaved) => res.json(playerSaved))
    .catch((error) => res.json(error));
}

function getPlayers(req, res) {
  Player.find().then((player) => res.json(player));
}

function updatePlayers(req, res) {
  const { playerId } = req.params;
  const updatedPlayer = req.body;
  Player.findByIdAndUpdate(
    { _id: playerId },
    updatedPlayer,
    { new: true },
    (error, doc) => {
      if (error) {
        res.json({ message: 'could not update this player.' });
        return;
      }
      res.json(doc);
    }
  );
}

function deletePlayers(req, res) {
  const { playerId } = req.params;
  Player.findByIdAndDelete({ _id: playerId }, (error, doc) => {
    if (error) {
      res.json({ message: 'Could not delete this player.' });
      return;
    }
    res.json({
      success: true,
      message: `The player ${doc.name} has been deleted.`,
      data: doc,
    });
  });
}

export { postPlayers, getPlayers, updatePlayers, deletePlayers };
