'use strict';

import IUserModel = require('./interfaces/UserModel');

class UserModel {
   private _userModel: IUserModel;
   
   constructor(user: IUserModel) {
       this._userModel = user;
   }
   
   get username(): string {
        return this._userModel.username; 
   }
   
   get email(): string {
        return this._userModel.email;
   }
    
   get name(): string {
        return this._userModel.name;
   }
}

Object.seal(UserModel);
export = UserModel;
