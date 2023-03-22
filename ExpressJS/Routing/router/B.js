const express = require('express');
const router = express();

const controller = require('../controller/controllerB');

router.get('/hello', controller.smallB);
router.get('/HI', controller.bigB);