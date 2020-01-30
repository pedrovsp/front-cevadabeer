import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../../models/production.model';
import { BottleTypeText } from '../../models/production.enum';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  @Input('production') production: Production;
  
  BottleType = BottleTypeText;

  constructor() { }

  ngOnInit() {
  }

  productionBarLength(): number {
    return 100 - ((this.production.getRemainingDays() * 100)/this.production.duration);
  }
}