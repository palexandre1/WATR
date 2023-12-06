const Model = require("../db/models");

const getCourts = (req, res) => {
  Model.getAllCourts()
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

const updatePlayerCount = (req, res) => {

}


module.exports = {
  getCourts,
  updatePlayerCount,
};
