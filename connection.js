const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");
const Message = require("./models/message");

sequelize
  .authenticate()
  .then(async (result) => {
    console.log(result);
    console.log("Connected to DB");
    await Message.sync();

    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
      return {
        name: `User${index}`,
        message: `Message${index}`
      };
    });

    await Message.bulkCreate(msgs);
  })
  .catch((err) => {
    console.error(err);
  });
