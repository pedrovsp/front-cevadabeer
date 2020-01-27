import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { ProductionPageComponent } from './pages/production-page/production-page.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ProductionComponent } from './components/production/production.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, RecipesPageComponent, ProductionPageComponent, RecipeComponent, ProductionComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
