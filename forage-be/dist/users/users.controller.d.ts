import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    signup(userData: {
        email: string;
        username: string;
        password: string;
    }): Promise<UserModel>;
    logout(userData: {
        username: string;
    }): Promise<any>;
}
