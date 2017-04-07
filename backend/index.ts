import express = require("express");
import path = require('path');
import jade = require('jade');

import Middlewares = require("./config/middlewares/base/MiddlewaresBase");

var app = express();
var port = parseInt(process.env.PORT, 10) || 3000;
app.set("port", port);

app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'jade');

console.log('### INDEX:TS ###')
console.log(Middlewares);

app.use(Middlewares.configuration);

app.listen(port, () => {
    console.log("Node app is running at localhost: " + port);
});
