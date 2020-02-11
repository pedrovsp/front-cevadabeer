import { Component, OnInit } from '@angular/core';
import { Production } from '../../models/production.model';
import { BeerComplexity, BeerType, Cor } from '../../models/beer.enum';
import { BottleType } from '../../models/production.enum';
import { RecipesService } from '../../services/recipes.service';
import { tap } from 'rxjs/operators';
import { Igredient } from '../../models/ingridient.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productionList: Production[] = []
  ingredientes: Igredient[] = []

  constructor(private recipesSvc: RecipesService) { }

  ngOnInit() {
    this.recipesSvc.getIngredients().pipe(
      tap(ig => {
        this.ingredientes = ig;
      })
    ).subscribe()

    this.recipesSvc.getProductions().pipe(
      tap(prd => {
        this.productionList = prd;
      })
    ).subscribe()
  }

  renderChart() {
//    var ctx = document.getElementById('estoque').getContext('2d');
  }

}
