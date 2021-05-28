import Club from '../models/club.model.js';

function postClub(req, res) {
  const club = new Club({
    name: req.body.name,
    stadium: req.body.stadium,
    manager: req.body.manager,
    budget: req.body.budget,
  });
  club
    .save()
    .then((clubSaved) => res.json(clubSaved))
    .catch((error) => res.json(error));
}

function getClub(req, res) {
  Club.find().then((club) => res.json(club));
}

function updateClub(req, res) {
  const { clubId } = req.params;
  const updatedClub = req.body;
  Club.findByIdAndUpdate(
    { _id: clubId },
    updatedClub,
    { new: true },
    (error, doc) => {
      if (error) {
        res.json({ message: 'could not update this club.' });
        return;
      }
      res.json(doc);
    }
  );
}

function deleteClub(req, res) {
  const { clubId } = req.params;
  Club.findByIdAndDelete({ _id: clubId }, (error, doc) => {
    if (error) {
      res.json({ message: 'Could not delete this club.' });
      return;
    }
    res.json({
      success: true,
      message: `The club ${doc.name} has been deleted.`,
    });
  });
}

export { postClub, getClub, updateClub, deleteClub };
