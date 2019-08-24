import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

// const PRIVATE_ROUTES: Routes = [
//   { path: '/ingredients' },
//   { path: '/recipes' },
//   { path: '/production' },
// ];

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule) },
  // { path: '', children: PRIVATE_ROUTES },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
