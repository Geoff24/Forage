import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async addUser(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string ) {

        const userid = await this.usersService.insertUser(username, email, password);
        return { id: userid }
    }

    @Get()
    async getAllUsers(){
        const userdata = await this.usersService.getUsers();
        
        return userdata;
    }

    @Get(':username')
    getUser(@Param('username') username){
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