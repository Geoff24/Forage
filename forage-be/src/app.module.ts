import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './forage-users/users.module';
import { JwtService,JwtModule } from '@nestjs/jwt';
import { secret } from './constants'
import { UsersService } from './forage-users/users.service';
import { User, UserSchema } from './forage-users/users.model';
import { UsersController } from './forage-users/users.controller';

@Module({
  imports: [UserModule,MongooseModule.forRoot(
    'mongodb+srv://loremipsum:forage123@cluster0.5rodjye.mongodb.net/forage?retryWrites=true&w=majority',
    
  ),
  JwtModule.register({
    secret,
    signOptions: {expiresIn: 60}
  }),
],
  controllers: [AppController],
  providers: [AppService,JwtService],
})
export class AppModule {}
