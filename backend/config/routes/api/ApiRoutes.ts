import express = require('express');
import UserRoutes = require('./UserRoutes');

var app = express();

class ApiRoutes {
    get routes() {
        app.use('/users', new UserRoutes().routes);
        
        return app;
    }
}
export = ApiRoutes;
