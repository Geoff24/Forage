import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;


@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('users/signup')
  async signupUser(
    @Body() userData: {
      email: string,
      username: string,
      password: string,
    },
  ): Promise<UserModel> {
    const { email, username, password } = userData;
    const passwordHash: string = await bcrypt.hash(password, SALT_ROUNDS);
    return this.userService.createUser({
      email,
      username,
      password: passwordHash,
    });
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
