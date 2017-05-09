import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard }      from './_guards/index';
import { AlertService, AuthenticationService, UserService, RecipeService} from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SearchRecipeComponent } from './search-recipe/index';
import { AddRecipeComponent } from './add-recipe/index';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        SearchRecipeComponent,
        AddRecipeComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        RecipeService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }