const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

apiRoutes(app); 
htmlRoutes(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});