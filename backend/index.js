const app = require("./src/app");
const connectToMongo = require("./src/configs/database");

const port = 3001;

app.listen(port, () => {
  console.log(`Server Running`);
  connectToMongo();
});
