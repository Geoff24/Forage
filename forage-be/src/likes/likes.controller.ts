import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Like as LikeModel } from '@prisma/client';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('like')
  async like(@Body()
      likeData: {
        userId: string;
        recipeId: string;
      } 
  ): Promise<LikeModel> {
    const { userId, recipeId } = likeData;
    return await this.likesService.create({
        recipeId,
        user: {
          connect: {
            id: userId,
          }
        }
    });
  }

  @Post('unlike')
  async unlike(@Body() 
    unlikeData: {
      userId: string;
      likeId: string;
    }
  ): Promise<LikeModel> {
    const { userId, likeId } = unlikeData;
    return await this.likesService.remove({
      id: likeId,
      userId,
    })
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
