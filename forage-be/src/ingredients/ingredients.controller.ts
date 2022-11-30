import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ingredient as IngredientModel } from '@prisma/client';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}


  @Post('create')
  async create(
      @Body() ingredientData: {
        name: string,
  }): Promise<IngredientModel> {
    const { name } = ingredientData;
    return this.ingredientsService.create({
      name: name
    });
  }
 }

// vim: ft=typescript ts=2 sw=2 sts=-1 sta et
