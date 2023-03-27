const express = require('express');
const router = express();
const write = require('../controller/write')

router.post('/create', write.createWriting);
router.get('/read', write.readWriting);
//router.patch('/update');
//router.delete('/delete');

module.exports = router;
