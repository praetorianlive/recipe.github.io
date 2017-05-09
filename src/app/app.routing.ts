import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SearchRecipeComponent } from './search-recipe/index';
import { AddRecipeComponent } from './add-recipe/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: SearchRecipeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'search-recipe', component: SearchRecipeComponent },
    { path: 'add-recipe', component: AddRecipeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);