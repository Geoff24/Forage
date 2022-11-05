import {Injectable, NotFoundException, HttpException, HttpStatus} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from './users.model'
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { secret } from './../constants'

@Injectable()
export class UsersService{
    
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
        ){}
    

    async signup2(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            username: user.username,
            email: user.email,
            password: hash
        }
        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }


    // async login(user: User, jwt: JwtService): Promise<any> {
    //     const foundUser = await this.userModel.findOne({ email: user.email }).exec();
    //     if (foundUser) {
    //         const { password } = foundUser;
    //         if (bcrypt.compare(user.password, password)) {
    //             const payload = { email: user.email };
    //             return {
    //                 token: jwt.sign(payload),
    //             };
    //         }
    //         return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    //     }
    //     return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    // }


    async login(username: string, password:string, jwt: JwtService): Promise<any> {
        const foundUser = await this.userModel.findOne({ username:username }).exec();
        if (foundUser) {
            const comp = await bcrypt.compare(password, foundUser.password)
            
            if (comp) {
                // const payload = { username: user.username }
                // const token = await jwt.sign(payload)
                // return {token}
                console.log(HttpStatus.OK)
                return HttpStatus.OK
            }
            else{
                console.log("incorrect password")
                console.log(HttpStatus.UNAUTHORIZED)
                return HttpStatus.UNAUTHORIZED
            }
        }
        else{
            console.log("user not found")
            return HttpStatus.UNAUTHORIZED
        }
    }


    async signup(email: string, username: string, password: string){
        const foundUser = await this.userModel.findOne({ username:username }).exec();
        if (foundUser){
            return HttpStatus.UNAUTHORIZED
        }
        else{
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);
            const newUser = new this.userModel({email:email, username:username, password:hash});
            const userid = await newUser.save();
            console.log(userid)
            return HttpStatus.OK;
        }
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