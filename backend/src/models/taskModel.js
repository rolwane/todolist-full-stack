const connection = require('./connection');

const getAllByUserId = async (id) => {
  const [response] = await connection.execute('SELECT * FROM Todolist.Tasks WHERE userId = ?', [id]);
  return response;
};

const addNewTask = async ({ title, status, userId }) => {
  const [response] = await connection.execute('INSERT INTO Todolist.Tasks VALUES (?, ?, ?, ?)', [0, title, status, userId]);
  return { insertId: response.insertId, title, status, userId };
};

const deleteTask = async (id) => {
  const [response] = await connection.execute('DELETE FROM Todolist.Tasks WHERE id = ?', [id]);
  return response;
};

module.exports = {
  getAllByUserId,
  addNewTask,
  deleteTask,
};
