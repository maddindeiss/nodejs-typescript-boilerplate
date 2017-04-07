import express = require("express");
import ApiRoutes = require("./../api/ApiRoutes");
import ViewRoutes = require("./../view/ViewRoutes");

var app = express();

class BaseRoutes {
    
    get routes() {
        console.log('### BASEROUTE.TS ###')
        console.log(app.settings);
        
        app.use('/api/v1', new ApiRoutes().routes);
        app.use('/', new ViewRoutes().routes);
       
        return app;
    }
}
export = BaseRoutes;
