import { Component, OnInit } from '@angular/core';
import { Production } from '../../models/production.model';
import { BeerComplexity, BeerType } from '../../models/beer.enum';
import { BottleType } from '../../models/production.enum';

@Component({
  selector: 'app-production-page',
  templateUrl: './production-page.component.html',
  styleUrls: ['./production-page.component.scss']
})
export class ProductionPageComponent implements OnInit {

  productionList: Production[] = []

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 4; i++) {

      this.productionList.push(new Production({
        beer: {
          name: 'Rota de Cerrado',
          complexity: BeerComplexity.EASY,
          type: BeerType.IPA,
          imgLink: '',
        },
        bottleType: BottleType.BARREL,
        duration: 5000,
        quantity: 3,
        startDate: new Date()
      }));
    }
  }

}
