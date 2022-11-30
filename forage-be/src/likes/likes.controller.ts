import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('likes')
export class LikesController {
  constructor(
      private readonly likesService: LikesService,
      private userService: UsersService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('like')
  async like(@Req() req: Request) {
    const userId = req.user.id;
    const user = this.userService.user({id: userId});
    return {
        userId,
    }
  }

  @Post('unlike')
  async unlike() {

  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
