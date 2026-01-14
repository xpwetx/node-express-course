const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {}
};

module.exports = connectDB;
