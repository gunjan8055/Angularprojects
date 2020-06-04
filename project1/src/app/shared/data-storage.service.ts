import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn : "root"
})
export class DataStorageService{
    constructor(private http: HttpClient, 
        private recipeService : RecipeService, 
        private authservice : AuthService)
    {  }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://recipe-book-45403.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
            console.log(response);    
        });
    }

    getchRecipes()
    {
       return this.authservice.user.pipe(take(1), exhaustMap(user => {
            return this.http.get<Recipe[]>(
            'https://recipe-book-45403.firebaseio.com/recipes.json'
            ).pipe(
        map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        )     
    }
       ));
}
}