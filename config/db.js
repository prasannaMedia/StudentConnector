const mongooose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectdb = async () => {
  try {
    await mongooose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectdb;
