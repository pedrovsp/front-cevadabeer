import { Component, OnInit } from '@angular/core';
import { Production } from '../../models/production.model';
import { BeerComplexity, BeerType, Cor } from '../../models/beer.enum';
import { BottleType } from '../../models/production.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productionList: Production[] = []

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 4; i++) {

      this.productionList.push(new Production({
        beer: {
          id: 1,
          cor: Cor.AMARELA,
          teorAlcoolico: 0.5,
          diasMaturacao: 5,
          ibu: 80,
          nome: 'Rota de Cerrado',
          complexidade: BeerComplexity.EASY,
          estilo: BeerType.IPA
        },
        bottleType: BottleType.BARREL,
        duration: 5,
        quantity: 3,
        startDate: new Date(2020, 0, 26)
      }));
    }
  }

  renderChart() {
//    var ctx = document.getElementById('estoque').getContext('2d');
  }

}
