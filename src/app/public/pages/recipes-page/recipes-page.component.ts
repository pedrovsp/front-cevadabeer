import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { RecipesService } from '../../services/recipes.service';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  beerList:Beer[];

  constructor(
      private recipesSvc: RecipesService,
      private _snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.recipesSvc.getRecipes().pipe(
      tap(cervejas => {
        this.beerList = cervejas;
        setTimeout(() => this.openSnackBar(), 1000);
      })
    ).subscribe()
  }


  openSnackBar() {
    this._snackBar.open('Seu estoque de Rota do Cerrado esta muito baixo!', 'Ok!', {
      duration: 3000,
    });
  }

}
