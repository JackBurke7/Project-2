const User = require("./user");
const WorkoutLog = require("./workoutLog");
const { Sequelize } = require('sequelize');

User.hasMany(WorkoutLog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

WorkoutLog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, WorkoutLog };
