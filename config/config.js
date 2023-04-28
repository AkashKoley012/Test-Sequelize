require("dotenv").config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PW,
        database: process.env.DB,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    },
    test: {
        username: process.env.USER,
        password: process.env.PW,
        database: process.env.DB,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    },
    production: {
        username: process.env.USER,
        password: process.env.PW,
        database: process.env.DB,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    },
};
