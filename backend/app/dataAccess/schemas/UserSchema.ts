'use strict';

import DataAccess = require('./../../dataAccess/DataAccess');
import IUserModel = require('./../../model/interfaces/UserModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        var schema = new mongoose.Schema({
           username: {
               type: String,
               required: true
           },
           email: {
               type: String,
               required: true
           },
           name: {
               type: String,
               required: true
           } 
        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;
