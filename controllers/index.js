const router = require('express').Router();
const users = require('./users');
const pages = require('./pages');
const WorkoutLog = require('../models/workoutLog');

router.use('/', pages);
router.use('/users', users);
router.post('/WorkoutLog', WorkoutLog);
  



module.exports = router;