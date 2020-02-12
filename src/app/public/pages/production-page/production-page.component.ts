import { Component, OnInit } from '@angular/core';
import { Production } from '../../models/production.model';
import { BeerComplexity, BeerType, Cor } from '../../models/beer.enum';
import { BottleType } from '../../models/production.enum';
import { RecipesService } from '../../services/recipes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-production-page',
  templateUrl: './production-page.component.html',
  styleUrls: ['./production-page.component.scss']
})
export class ProductionPageComponent implements OnInit {

  productionList: Production[] = []

  constructor(private recipesSvc: RecipesService) { }

  ngOnInit() {
    this.recipesSvc.getProductions().pipe(
      tap((prd: Production[]) => {
        prd.forEach(p => this.productionList.push(new Production(p)));
      })
    ).subscribe()
  }

}
