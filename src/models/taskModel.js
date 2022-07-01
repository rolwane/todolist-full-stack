const connection = require('./connection');

const getAllByUserId = async (id) => {
  const [response] = await connection.execute('SELECT * FROM Todolist.Tasks WHERE userId = ?', [id]);
  return response;
};

module.exports = {
  getAllByUserId,
};
