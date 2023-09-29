const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://muhammadabduh:muhammadabduh@cluster0.5vxosgs.mongodb.net/notes";
const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(mongoURI, () => {
    console.log("Database Running");
  });
};

module.exports = connectToMongo;
