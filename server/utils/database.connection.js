const mongoose = require("mongoose");

let database;

const connect = async () => {
  const databaseConnectionString =
    "mongodb+srv://db1:eQeGp4W5DbpGZMsr@cluster0.xzh4rfr.mongodb.net/itpm?retryWrites=true&w=majority&appName=Cluster0";

  if (database) {
    return;
  }

  try {
    const connection = await mongoose.connect(databaseConnectionString);
    database = connection.connection;
    console.log("Database Synced");
  } catch (error) {
    console.error("Error connecting to database: ", error.message);
  }
};

module.exports = connect;
