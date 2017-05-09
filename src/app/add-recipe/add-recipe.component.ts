import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, RecipeService  } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'addRecipe',
    templateUrl: 'add-recipe.component.html',
    styleUrls: ['add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {
    private addRecipeForm : FormGroup;
    
    constructor(
        private recipeService: RecipeService,
        private alertService: AlertService) { 
    } 
    
    ngOnInit() { 
        this.addRecipeForm = new FormGroup({
            addNameRecipe: new FormControl("", [
                Validators.required, 
                Validators.pattern("[a-zA-Zа-яА-я]*")
            ]),
            addContentRecipe: new FormControl("", [
                Validators.required, 
                Validators.pattern("[a-zA-Zа-яА-я]*")
            ]),
            addHrefRecipe: new FormControl(""),
            addCaloriesRecipe: new FormControl("", [
                Validators.required, 
                Validators.pattern("[0-9]*")
            ]),
            addProteinRecipe: new FormControl("", [
                Validators.required, 
                Validators.pattern("[0-9]*")
            ]),
            addFatRecipe: new FormControl("", [
                Validators.required, 
                Validators.pattern("[0-9]*")
            ]),
            addCarbohydrateRecipe: new FormControl("", [
                Validators.required, 
                Validators.pattern("[0-9]*")
            ])
        });
    }
    
    addRecipe() {
        let url = '/src/app/data/addRecipe';
        let content = JSON.stringify(this.addRecipeForm.value);
        this.recipeService.createRecipe(url, content)
            .subscribe(
                (data: any) => {
                    this.reset();
                },
                (error: any) => {
                    this.alertService.error(error);
                });
    }
    
    reset() {
        this.addRecipeForm.reset();
    }
}