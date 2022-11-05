import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtService } from '@nestjs/jwt'
import { User } from "./users.model";
import { request } from "http";
import { response } from "express";

@Controller('/users')
export class UsersController{
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

    // @Post('/signup2')
    // async Signup(@Res() response, @Body() user) {
    //     console.log("from controller: ", user)
    //     const newUSer = await this.usersService.signup(user);
    //     return response.status(HttpStatus.CREATED).json({
    //         newUSer
    //     })
    // }

    

    @Post('/login')
    async Login(@Body('Username') username:string, @Body('Password') password:string, @Body() body) {
        
        
        const code = await this.usersService.login(username, password,this.jwtService);
        return { code }
    }


    @Get('/test')
    async test(@Req() request){
        
        
        console.log(request);
    }
    @Post('/test2')
   test2(@Body() request){
        console.log(request)
   }

    
    @Post('/signup')
    async addUser(@Body('username') username: string, @Body('emailId') email: string, @Body('password') password: string ) {
        console.log("from signup: ", username, email);
        const code = await this.usersService.signup(email, username, password);
        return { code }
    }

    

    @Get()
    async getAllUsers(){
        const userdata = await this.usersService.getUsers();
        
        return userdata;
    }

    @Get(':username')
    getUser(@Param('username') username){
        console.log(username);
        return this.usersService.getSingleUser(username);
    }

    @Patch(':username')
    async updateUser(@Param('id') id,@Param('username') username, @Param('email') email, @Param('password') password){
        await this.usersService.updateUser(id,username,email,password)
        return null
    }

    @Delete(':username')
    async removeuser(@Param('username') username){
        await this.usersService.deleteUser(username)
        return null;
    }
}