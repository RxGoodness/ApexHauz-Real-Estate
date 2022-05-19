const createNewUser = `
     INSERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?, ?)
`;
const findUserByEmail = `
     SELECT * FROM users WHERE email = ?
`;

const findUserById = `
     SELECT * FROM users WHERE id = ?
`;

export {
  createNewUser,
  findUserByEmail,
  findUserById,
};
