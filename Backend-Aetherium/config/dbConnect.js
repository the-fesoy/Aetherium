const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connection has been granted");
  } catch (err) {
    console.log(err);
  }
};
module.exports = dbConnect;
