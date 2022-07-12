const { Router } = require('express');
const func = require('./temp');

const router = Router();

router.get('/cidade/:cidade', func.getTemp);

module.exports = router;