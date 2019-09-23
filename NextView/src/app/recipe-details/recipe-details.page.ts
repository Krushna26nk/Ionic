import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipe/recipes.service';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  extractedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramId => {
      if (!paramId.has('recipeId')) {
        return;
      }
      const recipeId = paramId.get('recipeId');
      this.extractedRecipe = this.recipeService.getRecipe(recipeId);
    });
    console.log(this.extractedRecipe);
  }

}
