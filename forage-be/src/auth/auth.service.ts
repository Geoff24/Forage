import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.user({ username: username });
    if (user && bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const secret = this.configService.get<string>('JWT_ACCESS_SECRET')
    const token = await this.jwtService.signAsync(payload, {secret: secret})
    return {
      access_token: token
    };
  }

  async getAccessToken(payload, secret: string) {
    return await this.jwtService.signAsync(payload, { secret });
  }

  /*
  async getRefreshToken(payload) {
    const secret = this.configService.get<string>('JWT_REFRESH_SECRET', 'secret');
    return await this.jwtService.signAsync(payload, { secret: secret });
  }
  */

}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
