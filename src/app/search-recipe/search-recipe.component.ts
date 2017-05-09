import { Component, OnInit} from '@angular/core';
import { AlertService, RecipeService } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Recipe } from '../_models/index';

@Component({
    selector: 'searchRecipe',
    templateUrl: 'search-recipe.component.html',
    styleUrls: ['search-recipe.component.css']
})

export class SearchRecipeComponent implements OnInit {
    private searchRecipeForm : FormGroup;
    private recipes: Recipe[]; 
    
    constructor(
        private recipeService: RecipeService,
        private alertService: AlertService) { 
    } 
    
    ngOnInit() { 
        this.searchRecipeForm = new FormGroup({
            searchRecipe: new FormControl(""),
        });
    }
    
    searchRecipe() {
        let searchString = this.searchRecipeForm.get('searchRecipe').value;
        console.log('searchString = ' + searchString);
//        let url = `/api/search?query=${searchString}`;
        let url = '/src/app/data/recipe.json';
        this.recipeService.getRecipe(url)
            .subscribe(
                (data: any) => {
                    this.recipes = data as Recipe[];
//                    this.clearSearchField();
                },
                (error: any) => {
                    this.alertService.error(error);
                });
    } 
    
    clearSearchField() {
        this.searchRecipeForm.setValue({searchRecipe: ''});
    }
}   
 