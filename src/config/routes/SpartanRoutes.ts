import express = require("express");
import SpartanController = require("./../../controllers/SpartanController");

var router = express.Router();
class SpartanRoutes {
    private _spartanController: SpartanController;
    
    constructor () {
        this._spartanController = new SpartanController();   
    }
    get routes () : express.Router {
        
        var controller = this._spartanController;
        router.get("/spartans", controller.read);
        router.post("/spartans", controller.create);
        router.put("/spartans/:_id", controller.update);
        router.get("/spartans/:_id", controller.findById);
        router.delete("/spartans/:_id", controller.delete);
       
        return router;
    }
}

Object.seal(SpartanRoutes);
export = SpartanRoutes;
