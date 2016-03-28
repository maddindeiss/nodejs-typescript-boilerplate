import express = require("express");
interface ReadController {
    read: express.RequestHandler;
    findById: express.RequestHandler;
}
export = ReadController;
