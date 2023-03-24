const express = require('express');
const {sequelize} = require('./models');
const app = express();
const dotenv = require('dotenv');

const router = require('./router/index');

dotenv.config();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);

    sequelize.sync({force : false})
    .then(() => {
        console.log("Success linking Database");
    })
    .catch((err) => {
        console.error(err)
    });
})