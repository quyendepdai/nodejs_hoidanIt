const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, field] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (userId) => {
  let [result, field] = await connection.query(
    `SELECT * FROM Users WHERE id= ?`,
    [userId]
  );
  result = result && result.length > 0 ? result[0] : {};
  return result;
};

const updateUserModel = async (...args) => {
  let [result, field] = await connection.query(
    `UPDATE Users set email = ?, name = ?, city = ? WHERE id= ?`,
    [...args]
  );
};

const deleteUserById = async (userId) => {
  let [result, field] = await connection.query(
    `DELETE FROM Users WHERE id= ? `,
    [userId]
  );
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserModel,
  deleteUserById,
};
