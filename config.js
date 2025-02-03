const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://nebi:nebi123@nebiy-cluster.wxnm5.mongodb.net/workout?retryWrites=true&w=majority&appName=nebiy-cluster"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
