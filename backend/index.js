const mongodb = require("./db/mongodb");
const app = require("./app");
require("dotenv").config();


async function main() {
  try {
    await mongodb.connect();
    console.log("mongodb database connected.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT,() => console.log(`server running on port ${PORT}`));

  } catch(err) {
    console.log(err.message);
  }
}

main();

