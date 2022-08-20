import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti alla puttanesca',
      'Very tasty',
      '../../../assets/puttanesca.jpg',
      [new Ingredient('Pasta', 1), new Ingredient('Flour', 2)]
    ),
    new Recipe(
      'Strawberry cake',
      'What do I have to say?',
      '../../../assets/redfruitscake.jpg',
      [new Ingredient('Flour', 1), new Ingredient('Strawberry', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
