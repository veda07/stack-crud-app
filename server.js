const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

require('./db/db');

const sushiController = require('./controllers/sushi');


app.use(bodyParser.urlencoded({extended: false})) 
app.use(methodOverride('_method'))
app.use('/sushi', sushiController);



app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
  });
  