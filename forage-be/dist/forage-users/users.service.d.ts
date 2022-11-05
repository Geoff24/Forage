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
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { User } from './users.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signup2(user: User): Promise<User>;
    login(username: string, password: string, jwt: JwtService): Promise<any>;
    signup(email: string, username: string, password: string): Promise<HttpStatus.OK | HttpStatus.UNAUTHORIZED>;
    getUsers(): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSingleUser(username: string): Promise<import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private findUser;
    updateUser(userid: any, username: any, email: any, password: any): Promise<void>;
    deleteUser(username: any): Promise<void>;
}
