const chalk = require("chalk");
const normalizeCard = require("../cards/helpers/normalizeCard");
const { createCard } = require("../cards/models/cardsAccessDataService");
const { registerUser } = require("../users/models/usersAccessDataService");
const normalizeUser = require("../users/helpers/normalizeUser");
const data = require("./initialData.json");
const { generateUserPassword } = require("../users/helpers/bcrypt");

const generateInitialCards = async () => {
  const { cards } = data;
  cards.forEach(async (card) => {
    try {
      const userId = "6376274068d78742d84f31d2";
      card = await normalizeCard(card, userId);
      await createCard(card);
      return;
    } catch (error) {
      return console.log(chalk.redBright(error.message));
    }
  });
};

const generateInitialUsers = async () => {
    const { users } = data;
    users.forEach(async (user) => {
      try {
        const userId = "6376274068d78742d84f31d2";
        card = await normalizeUser(user, userId);
        user.password = generateUserPassword (user.password);
        await registerUser (user);
        return;
      } catch (error) {
        return console.log(chalk.redBright(error.message));
      }
    });
  };
exports.generateInitialCards = generateInitialCards;
exports.generateInitialUsers = generateInitialUsers;