import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(username: string, email: string, password: string): Promise<{
        id: import("mongoose").Document<unknown, any, import("./users.model").User> & import("./users.model").User & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAllUsers(): Promise<{
        id: any;
        username: string;
        email: string;
        password: string;
    }[]>;
    getUser(username: any): Promise<{
        id: any;
        username: string;
        email: string;
        password: string;
    }>;
}
