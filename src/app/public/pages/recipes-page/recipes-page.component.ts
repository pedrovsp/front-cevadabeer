import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerComplexity, BeerType } from '../../models/beer.enum';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  beerList: Beer[] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 15; i++) {

      this.beerList.push(new Beer({
        name: 'Rota de Cerrado',
        complexity: BeerComplexity.EASY,
        type: BeerType.IPA,
        imgLink: '',
      }));
    }
  }

}
