const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set("strictQuery", false);
const connectDatabase = async () => {
    await mongoose
        .connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,

        })
      .then((data) => {
          console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
};

module.exports = connectDatabase;