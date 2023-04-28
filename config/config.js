require("dotenv").config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PW,
        database: process.env.DB,
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DIALECT,
    },
    test: {
        username: process.env.USER,
        password: process.env.PW,
        database: process.env.DB,
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DIALECT,
    },
    production: {
        username: process.env.USER,
        password: process.env.PW,
        database: process.env.DB,
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DIALECT,
    },
};
