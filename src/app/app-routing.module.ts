import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '/login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

const PRIVATE_ROUTES: Routes = [
  { path: '/ingredients' },
  { path: '/recipes' },
  { path: '/production' },
];

const routes: Routes = [
  PUBLIC_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
