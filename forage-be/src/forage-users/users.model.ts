import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    
}

// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// export type UserDocument = User & Document;
// @Schema()
// export class User {
//     @Prop({required:true})
//     username: string;
//     @Prop({required:true, unique:true, lowercase:true})
//     email: string;
//     @Prop({required:true})
//     password: string
//     @Prop({default: Date.now() })
//     createdDate: Date
// }
// export const UserSchema = SchemaFactory.createForClass(User)