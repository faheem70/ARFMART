const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`Mongodb connected with server : ${data.connection.host}`)
        });
};
module.exports = connectDatabase