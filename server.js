const express = require ('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();
const models = require("./models");

app.use(controllers);


sequelize.sync({}).then(() => {
app.listen(PORT, () => {
    console.log("Now Listening");
})
});
