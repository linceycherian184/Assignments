const path = require('path');
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
var corsOptions = {
  origin: "http://localhost:3000"
};

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes = require('./routes/expense.routes');
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions))

app.use('/expense', expenseRoutes);

sequelize
  .sync()
  .then(result => {
    console.log("Database connected")
    app.listen(3000);
    console.log("Listening to port 3000")
  })
  .catch(err => {
    console.log(err);
  });
