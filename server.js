const express = require('express');
const path = require ('path');
const app = express();
const port = process.env.port || 3000;
// middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app, path);

app.listen(port, function(){
    console.log("App Listenig on Port: " + port);
});