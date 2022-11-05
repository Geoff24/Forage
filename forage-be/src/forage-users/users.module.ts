import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { UsersController } from './users.controller';
import { UserSchema } from './users.model';
import { UsersService } from './users.service';
import { JwtModule,JwtService } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),JwtModule],
    controllers: [UsersController],
    providers: [UsersService,JwtService]
})

export class UserModule {}