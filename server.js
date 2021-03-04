const express = require ("express");
const exphbs  = require('express-handlebars');
const path = require ("path");
// const routes = require ("./routes");

const app = express();
const port = process.env.PORT || 3000;

// const db = require("./models");

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

// Setup handlebars template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// ----- ROUTES -----
app.get('/', (req, res) => {
    res.render('home');
})

// db.sequelize.sync().then(() => {
    let time = new Date;
    
    app.listen(port, () => {
      console.log("\n" + ("-".repeat(50) + "\n").repeat(2), `\nBurger App running... \nPort: ${port} \nTime: ${ time.toTimeString()} \n`);
    });
//   });