import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Like as LikeModel } from '@prisma/client';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async likes(@Req() req): Promise<LikeModel[]> {
    return await this.likesService.findAll({
      where: {
        userId: req.user.id
      }
    })
  }

  @UseGuards(JwtAuthGuard)
  @Post('like')
  async like(
    @Req() req,
    @Body() likeData: {
      apiId: string;
    }
  ): Promise<LikeModel> {
    const { apiId } = likeData;
    return await this.likesService.create({
      apiId,
      user: {
        connect: {
          id: req.user.id,
        }
      }
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('unlike')
  async unlike(
    @Req() req,
    @Body() unlikeData: {
      likeId: string;
    }
  ): Promise<LikeModel> {
    const { likeId } = unlikeData;
    return await this.likesService.remove({
      id: likeId
    })
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
