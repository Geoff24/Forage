import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from './users.model'
import { Model } from 'mongoose';

@Injectable()
export class UsersService{
    
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
        ){}
    
    async insertUser(email: string, username: string, password: string){
        
        const newUser = new this.userModel({email:email, username:username, password:password});
        const userid = await newUser.save();
        console.log(userid)
        return userid;
    }
    async getUsers() {
        const users = await this.userModel.find();
        console.log(users)
    }
} 