import { Controller, Post, Body } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async signup(
    @Body() userData: {
      email: string,
      username: string,
      password: string,
    },
  ): Promise<UserModel> {
    const { email, username, password } = userData;
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    return this.usersService.createUser({
      email,
      username,
      password: passwordHash,
    });
  }


}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
