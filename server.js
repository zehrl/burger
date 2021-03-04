const express = require ("express");
const exphbs  = require('express-handlebars');
const path = require ("path");

// Setup express app & port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup handlebars template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Setup routes
app.use(require('./controllers/burgers_controller'))

// db.sequelize.sync().then(() => {
    let time = new Date;
    
    app.listen(port, () => {
      console.log("\n" + ("-".repeat(50) + "\n").repeat(2), `\nBurger App running... \nPort: ${port} \nTime: ${ time.toTimeString()} \n`);
    });
//   });