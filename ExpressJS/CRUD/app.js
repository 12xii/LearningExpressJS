const express = require('express');
const { sequelize } = require('./model');
const dotenv = require('dotenv');

dotenv.config();

const router = require('./router/index');

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);

    sequelize.sync({ force: false })
        .then(() => {
            console.log(`Success to link DataBase!`);
        })
        .catch((err) => {
            console.error(err);
        })
})