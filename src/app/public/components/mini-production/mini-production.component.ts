import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../../models/production.model';

@Component({
  selector: 'app-mini-production',
  templateUrl: './mini-production.component.html',
  styleUrls: ['./mini-production.component.scss']
})
export class MiniProductionComponent implements OnInit {

  @Input('production') production: Production;
  
  constructor() { }

  ngOnInit() {
  }

  productionBarLength(): number {
    return 100 - ((this.production.getRemainingDays() * 100)/this.production.duration);
  }

}
