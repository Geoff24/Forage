/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtService } from '@nestjs/jwt';
import { User } from "./users.model";
export declare class UsersController {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    Login(username: string, password: string, body: any): Promise<{
        code: any;
    }>;
    test(request: any): Promise<void>;
    test2(request: any): void;
    addUser(username: string, email: string, password: string): Promise<{
        code: HttpStatus;
    }>;
    getAllUsers(): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getUser(username: any): Promise<import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser(id: any, username: any, email: any, password: any): Promise<any>;
    removeuser(username: any): Promise<any>;
}
