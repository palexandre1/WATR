const db = require('./db')
db.connect()

const getAllCourts = async () => {
  const text = 'SELECT * FROM courts;';
  results = await db.query(text);
  return results.rows
  db.end()
}

const updatePlayerCount = (id) => {

}

module.exports = {
  getAllCourts,
  updatePlayerCount,
}