const { db } = require("../index");

const userRetrieval = async (currentUserId) => {
  const user = await db.query(
    `SELECT * from users WHERE id = ${currentUserId}`
  );
  return user.rows[0];
};

module.exports = {
  userRetrieval,
};
