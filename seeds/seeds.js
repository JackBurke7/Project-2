const sequelize = require('../config/connection');
const { User, WorkoutLog } = require('../models');

const workoutData = require('./workoutData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const User = await User.bulkCreate(userData, {});
  const workouts = await workout_log.bulkCreate(workoutData)
  console.log(workouts);
}

seedDatabase();