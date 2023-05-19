const router = require('express').Router();
const { User, WorkoutLog } = require("../../models");

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/dashboard/:user_id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id);

    console.log("userData");

    res.render('dashboard', {
      user: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/dashboard/:user_id/workout-log', async (req, res) => {
  try {
    const { workoutName, reps, sets } = req.body;
    const userId = req.params.user_id;

    // Create a new workout log record in the database using the WorkoutLog model
    const workoutData = await WorkoutLog.create({
      workoutName,
      reps,
      sets,
      UserId: userId
    });

    res.json(workoutData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
