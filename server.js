const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const port = 3000

const ejs = require("ejs-next");
ejs.delimiter = "?";
app.engine("ejs", ejs.__express);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/jquery/', express.static('node_modules/jquery/dist/'));
app.use('/bootstrap/', express.static('node_modules/bootstrap/dist/'));
require('./controllers/index')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
