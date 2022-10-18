import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    email: string;
    username: string;
    password: string;
}>;
export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
}
