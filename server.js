const express = require ("express");
const exphbs  = require('express-handlebars');
const path = require ("path");
const orm = require ("./config/orm");
// const routes = require ("./routes");

// Allows us to use .env file
require('dotenv').config();

// Setup express app & port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup handlebars template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// // ----- ROUTES -----

app.get('/', (req, res) => {
    res.render('index');
})

console.log(`process.env = ${process.env.DB_PASS}`)

// db.sequelize.sync().then(() => {
    let time = new Date;
    
    app.listen(port, () => {
      console.log("\n" + ("-".repeat(50) + "\n").repeat(2), `\nBurger App running... \nPort: ${port} \nTime: ${ time.toTimeString()} \n`);
    });
//   });