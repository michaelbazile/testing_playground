const { db } = require('./db/index');
const userCreation = (name, age, height) => {
  if (userPropertyValidation(name, age, height) === false) {
    return false;
  }

  return dbInsertQuery({ name, age, height });
};

const userPropertyValidation = (name, age, height) => {
  if (!name || !age || !height) {
    return false;
  }
  // ask someone about best practices about this
    // Is this function doing too much or should it be extrapolated out
  if (typeof name !== 'string') return false;
  if (typeof height !== 'string') return false;

};

const dbInsertQuery = ({ age, height, name }) => {
  const newUser = {age, height, name };
  db.query(`INSERT INTO users (age, height, username) VALUES ('${age}','${height}', '${name}')`);
  return newUser;
};

Object.assign(module.exports, {
  userCreation,
});
