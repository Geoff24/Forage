import { Ingredient, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class IngredientsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.IngredientCreateInput): Promise<Ingredient>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.IngredientWhereUniqueInput;
        where?: Prisma.IngredientWhereInput;
        orderBy?: Prisma.IngredientOrderByWithRelationInput;
    }): Promise<Ingredient[]>;
    findOne(ingredientWhereUniqueInput: Prisma.IngredientWhereUniqueInput): Promise<Ingredient>;
    update(params: {
        where: Prisma.IngredientWhereUniqueInput;
        data: Prisma.IngredientUpdateInput;
    }): Promise<Ingredient>;
    remove(where: Prisma.IngredientWhereUniqueInput): Promise<Ingredient>;
}
