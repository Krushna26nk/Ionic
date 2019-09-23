import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipe: Recipe[];

  constructor( private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getAllRecipies();
  }

}
