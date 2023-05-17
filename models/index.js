const User = require("./user");
const workout_log = require("./workout-log");
const { Sequelize } = require('sequelize');


User.hasMany(workout_log, {
    foreignkey:'user_id',
    onDelete: 'CASCADE'
});


workout_log.belongsTo(User, {
    foreignkey: 'user_id'
});

module.exports = {User, workout_log};