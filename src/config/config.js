const dotenv = require('dotenv');

dotenv.config(); // .env ---> variables globales

module.exports = {
    server:{
        port: process.env.SERVER_PORT
    }
}