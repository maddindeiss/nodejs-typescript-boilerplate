import mongoose = require('mongoose');

interface UserModel extends mongoose.Document {
    username: string;
    email: string;
    name: string;
}

export = UserModel;
