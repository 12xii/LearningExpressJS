const express = require('express');
const router = express();

const controller = require('../controller/user');

router.post('/get', controller.signUp);

module.exports = router;