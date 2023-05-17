const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class WorkoutLog extends Model {};

WorkoutLog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        workoutName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout_log'
    }
);

module.exports = WorkoutLog;
