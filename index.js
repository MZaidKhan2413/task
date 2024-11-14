const dotenv = require("dotenv");
const app = require("./src/app");
const connectToDb = require("./src/db/connectToDb");

dotenv.config({
  path: ".env",
});

const port = process.env.PORT;

connectToDb()
  .then(() => {
    app.on("error", () => {
      console.error("Server error: ", error);
      process.exit(1);
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error("Failed to connect to database: ", error));
