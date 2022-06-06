import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import {  recipeResloverService } from './recipes/recipes-reslover';
import { AuthComponent } from './auth/auth.component';
import { AuthGurdService } from './auth/auth-gurd';
const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch:"full" },
  { path: "recipes", component: RecipesComponent , canActivate : [AuthGurdService] , children : [
    {path: "" ,component: RecipeStartComponent},
    {path :"new" , component:RecipeEditComponent},
    {path:":id" , component:RecipesDetailComponent , resolve : [recipeResloverService]},
    {path : ":id/edit" , component: RecipeEditComponent }

  ]},
  { path: "shopping-list", component: ShopingListComponent },
  {path: "auth" , component : AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class appRouters
{

}
