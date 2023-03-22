const express = require('express');
const router = express();

const A = require('./A');
const B = require('./B');

router.use('/a', A);
router.use('/b', B);

module.exports = router;