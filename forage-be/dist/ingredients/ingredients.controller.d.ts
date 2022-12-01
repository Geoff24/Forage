import { Ingredient as IngredientModel } from '@prisma/client';
import { IngredientsService } from './ingredients.service';
export declare class IngredientsController {
    private readonly ingredientsService;
    constructor(ingredientsService: IngredientsService);
    create(ingredientData: {
        name: string;
        apiId: string;
    }): Promise<IngredientModel>;
    delete(ingredientData: {
        id: string;
    }): Promise<IngredientModel>;
}
