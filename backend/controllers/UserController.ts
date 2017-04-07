import express = require('express');
import UserBusiness = require('./../app/business/UserBusiness');
import IBaseController = require('./interfaces/base/BaseController');
import IUserModel = require('./../app/model/interfaces/UserModel');

class UserController implements IBaseController <UserBusiness> {
    create(req: express.Request, res: express.Response): void {
            try {
                var users: IUserModel = <IUserModel>req.body;
               
                var userBusiness = new UserBusiness();
                userBusiness.create(users, (error, result) => {
                    if(error) res.json({'error': error});
                    else res.json({'data': result});
                });
            }
            catch (e)  {
                console.log(e);
                res.json({'error': 'error in your request'});
            }
    }
    read(req: express.Request, res: express.Response): void {
        try {
             var userBusiness = new UserBusiness();
                userBusiness.read((error, result) => {
                    if(error) res.json({'error': error});
                    else res.json(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.json({'error': 'error in your request'});
            }
    }
    update(req: express.Request, res: express.Response): void {
        try {
             var users: IUserModel = <IUserModel>req.body;
             var _id: string = req.params._id;
             var userBusiness = new UserBusiness();
                userBusiness.update(_id, users, (error, result) => {
                    if(error) res.json({'error': error});
                    else res.json({'data': result});
                });   
            }
            catch (e)  {
                console.log(e);
                res.json({'error': 'error in your request'});
            }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
             var _id: string = req.params._id;
             var userBusiness = new UserBusiness();
                userBusiness.delete(_id, (error, result) => {
                    if(error) res.json({'error': error});
                    else res.json({'data': result});
                });   
            }
            catch (e)  {
                console.log(e);
                res.json({'error': 'error in your request'});
            }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
             var _id: string = req.params._id;
             var userBusiness = new UserBusiness();
                userBusiness.findById(_id, (error, result) => {
                    if(error) res.json({'error': error});
                    else res.json(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.json({'error': 'error in your request'});
            }
    }
}
export = UserController;
