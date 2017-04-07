'use strict';

import express = require('express');

var router = express.Router();

class IndexRoutes {
    get routes() {
        
        router.get('/', (req, res, next) => {
             res.render('index', {title: 'Test'});
        });
        
        return router;
    }
}

Object.seal(IndexRoutes);
export = IndexRoutes;
