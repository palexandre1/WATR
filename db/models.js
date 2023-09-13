const db = require('./models')

const getCourts = () => {
  const text = 'SELECT * FROM courts';
  return db.query(text);
}

const updatePlayerCount = (id) => {

}

module.exports = {
  getCourts,
  updatePlayerCount,
}
