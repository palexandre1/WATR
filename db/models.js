const db = require("./db");
db.connect();

const getAllCourts = async () => {
  const text = "SELECT * FROM courts;";
  const results = await db.query(text);
  return results.rows;
};

const updatePlayerCount = async (id) => {
  const text =
    "UPDATE courts SET player_count = player_count + 1 WHERE id = $1";
  const values = [id];
  const results = await db.query(text, values);
  return results.rows;
};

module.exports = {
  getAllCourts,
  updatePlayerCount,
};
