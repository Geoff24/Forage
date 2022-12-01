import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PantryService } from './pantry.service';
import { Pantry as PantryModel } from '@prisma/client';

@Controller('pantry')
export class PantryController {
  constructor(private readonly pantryService: PantryService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPantry(
    @Req() req
  ): Promise<PantryModel> {
    return await this.pantryService.create({
      user: {
        connect: {
          id: req.user.id,
        }
      }
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async pantry(
    @Req() req
  ): Promise<PantryModel> {
    return await this.pantryService.findOne({
      userId: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async add(
    @Req() req,
    @Body() addData: {
      ingredientId: string;
    }
  ): Promise<PantryModel> {
    const { ingredientId } = addData;
    this.pantryService.update({
      where: {
        userId: req.user.id,
      },
      data: {
        ingredients: {
          connect: {
            id: ingredientId,
          }
        }
      }
    });

    return await this.pantryService.findOne({
      userId: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('remove')
  async remove(
    @Req() req,
    @Body() removeData: {
      ingredientId: string;
    }
  ): Promise<PantryModel> {
    const { ingredientId } = removeData;
    this.pantryService.update({
      where: {
        userId: req.user.id,
      },
      data: {
        ingredients: {
          delete: {
            id: ingredientId
          }
        }
      }
    });

    return await this.pantryService.findOne({
      userId: req.user.id,
    })
  }
}

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
