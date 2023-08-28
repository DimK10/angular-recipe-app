import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private _recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ),
  ];

  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }
}
