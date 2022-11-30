import { Controller, UseGuards, Post, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from './local-auth.guard';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { User as UserModel } from '@prisma/client';


@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() userData: {
      username: string,
      password: string,
    }
  ) {
    return this.authService.login(userData);
  }

  /*
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(
    @Body() userData: {
      id: string,
    },
  ): Promise<UserModel> {
    const { id } = userData;
    const user = this.userService.get({ id: id})
    if (!user) 
  }
  */
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
