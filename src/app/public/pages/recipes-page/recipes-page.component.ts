import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerComplexity, BeerType } from '../../models/beer.enum';
import { RecipesService } from '../../services/recipes.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  beerList:Beer[];

  constructor(private recipesSvc: RecipesService) { }

  ngOnInit() {
    this.recipesSvc.getRecipes().pipe(
      tap(cervejas => {
        this.beerList = cervejas;
      })
    ).subscribe()
  }

}
