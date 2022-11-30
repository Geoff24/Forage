import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { IngredientsModule } from './ingredients/ingredients.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    AuthModule,
    UsersModule,
    PrismaModule,
    JwtModule,
    IngredientsModule,
    LikesModule,
  ],
  controllers: [AppController, AuthController, UsersController],
  providers: [PrismaService, AuthService, UsersService],
})
export class AppModule {}

//vim: ft=typescript ts=2 sw=2 sts=-1 sta et
