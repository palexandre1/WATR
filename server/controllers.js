const Model = require('../db/models')

const getCourts = (req, res) => {
  Model.getAllCourts()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
    })
}

const updatePlayerCount = (req, res) => {
  const { id } = req.params;
  Model.updatePlayerCount(id)
    .then((response) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500)
    })
}


module.exports = {
  getCourts,
  updatePlayerCount
};