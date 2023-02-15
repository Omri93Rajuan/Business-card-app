const bcrypt = require("bcryptjs");

const generateUserPassword = password => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (password, anotherPassword) => {
  return bcrypt.compareSync(password, anotherPassword);
};

exports.generateUserPassword = generateUserPassword;
exports.comparePassword = comparePassword;