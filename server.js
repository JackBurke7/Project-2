const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const PORT = 3001;
const app = express();
const path = require('path');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/public/js/index.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'public/js/index.js'));
});

// Define the route for /users/WorkoutLog
app.get('/users/workoutLog', async (req, res) => {
  try {
    const workoutLogs = [
      { id: 1, workoutName: 'BenchPress', reps: 10, sets: 3 },
      { id: 2, workoutName: 'Squat', reps: 12, sets: 4 },
      { id: 3, workoutName: 'Deadlift', reps: 8, sets: 3 },
    ];
  
    // Send the workout logs as a response
    res.json(workoutLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Now Listening on Port 3001');
  });
});
