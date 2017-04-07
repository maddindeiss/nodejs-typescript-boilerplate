import express = require('express');
import IndexRoutes = require('./IndexRoutes');

var app = express();

class ApiRoutes {
    get routes() {
        app.use('/', new IndexRoutes().routes);
        
        return app;
    }
}
export = ApiRoutes;
