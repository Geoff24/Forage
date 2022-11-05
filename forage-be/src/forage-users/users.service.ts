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
        return users
    }

    async getSingleUser(username: string){
        const user = await this.findUser(username)
        return user
    }

    private async findUser(username){
        const user = await this.userModel.findOne({username:username});
        if (!user){
            throw new NotFoundException('Could not find user.');
        }
        return user

    }

    async updateUser(userid,username,email,password){
        const updatedUser = await this.findUser(username);
        if (email){
            updatedUser.email = email
        }
        if(password){
            updatedUser.password = password
        }
        updatedUser.save()
    }

    async deleteUser(username){
        await this.userModel.deleteOne({username:username})
    }
} 