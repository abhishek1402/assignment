const express = require('express');

const app = express();
const routes = require('./services/route');
var cors = require('cors');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())

require('./lib/firebase');

app.use('/api/', jsonParser, routes);
app.listen(process.env.PORT || 8080, () => {
  console.log('app listeng on port 8080');
});
