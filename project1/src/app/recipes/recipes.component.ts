import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],

})
export class RecipesComponent implements OnInit {

  
  constructor(private recipeservice : RecipeService) { }

  ngOnInit() {
    // this.recipeservice.recipeedit.subscribe(
    //   (recipe : Recipe) => {
    //     this.Selectedrecipe = recipe;       
    //   }
    // );
  }

}
