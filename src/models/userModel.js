const connection = require('./connection');

const registerNewUser = async ({ name, email, password }) => {
  const [response] = await connection.execute('INSERT INTO Todolist.Users VALUES (?, ?, ?, ?)', [0, name, email, password]);
  return { insertId: response.insertId, name, email };
};

module.exports = {
  registerNewUser,
};
