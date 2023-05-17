const router = require('express').Router();
const users = require('./users');
const pages = require('./pages');

router.use('/', pages);
router.use('/users', users);




module.exports = router;