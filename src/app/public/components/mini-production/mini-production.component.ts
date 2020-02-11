import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../../models/production.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mini-production',
  templateUrl: './mini-production.component.html',
  styleUrls: ['./mini-production.component.scss']
})
export class MiniProductionComponent implements OnInit {

  @Input('production') production: Production;
  
  imgUrl = environment.S3_URL;
  extension = environment.IMG_TYPE;
  
  constructor() { }

  ngOnInit() {
  }

  productionBarLength(): number {
    return 100 - ((this.production.getRemainingDays() * 100)/this.production.getDuracao());
  }

  getImgUrl() {
    // todo this.production.cerveja.id
    return this.imgUrl + `1` + this.extension;
  }

}
