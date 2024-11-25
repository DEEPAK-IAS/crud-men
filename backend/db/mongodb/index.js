const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL);

  } catch(err) {
    throw new Error(err);
  }
}

module.exports = {
  connect
};