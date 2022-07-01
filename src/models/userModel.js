const connection = require('./connection');
const generateToken = require('../utils/generateToken');

const registerNewUser = async ({ name, email, password }) => {
  const [response] = await connection.execute('INSERT INTO Todolist.Users VALUES (?, ?, ?, ?)', [0, name, email, password]);
  const token = generateToken({ id: response.insertId, name, email });
  return token;
};

const getUserByEmail = async (email)  => {
  const [response] = await connection.execute('SELECT * FROM Todolist.Users WHERE email = ?', [email]);
  return response;
};

module.exports = {
  registerNewUser,
  getUserByEmail,
};
