import { Controller, UseGuards, Post, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body()
      userData: {
        username: string,
        password: string,
  }) {
    return this.authService.login(userData);
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
