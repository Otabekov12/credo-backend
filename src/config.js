const dotenv = require("dotenv").config();

const connectionString = process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 1234;

module.exports = { connectionString, PORT };
