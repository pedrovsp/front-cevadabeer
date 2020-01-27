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

  getRemainingDays(prod: Production): number {
    return 1;
  }

}
