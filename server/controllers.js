const Model = require('../db/models')

const getCourts = (req, res) => {
  Model.getCourts()
    .then((response) => {
      const result = response.rows;
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
    })
}

const updatePlayerCount = (req, res) => {

}


module.exports = {
  getCourts,
  updatePlayerCount
};