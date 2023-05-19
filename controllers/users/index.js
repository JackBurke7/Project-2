const express = require('express');
const router = express.Router();
const { User, WorkoutLog } = require('../../models'); 


router.post('/users/sign-up', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userData = await User.create({ username, email, password });
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/users/WorkoutLog', async (req, res) => {
  try {
    const { workoutName, reps, sets } = req.body;
    const workoutData = await WorkoutLog.create({ workoutName, reps, sets });
    res.json(workoutData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
