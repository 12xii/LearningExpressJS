const express = require('express');
const router = express();

const controller = require('../controller/controllerA');

router.get('/hello', controller.smallA);
router.get('/HI', controller.bigA);