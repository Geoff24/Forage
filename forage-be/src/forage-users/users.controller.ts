import { Controller, Post, Body, Get } from "@nestjs/common";
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
        
        return userdata
    }
}