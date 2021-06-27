require("dotenv").config();
const app = require("./api");
const db = require("../knexfile");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migration");
    await db.migrate.latest();

    console.log("Running seed");
    await db.seed.run();

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting server!", err);
    process.exit(-1);
  }
})();