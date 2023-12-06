const db = require("./db");
db.connect()

const getAllCourts = async () => {
  const text = "SELECT * FROM courts;";
  const results = await db.query(text);
  db.end();
  return results.rows;
}

const updatePlayerCount = (id) => {

}

module.exports = {
  getAllCourts,
  updatePlayerCount,
};
