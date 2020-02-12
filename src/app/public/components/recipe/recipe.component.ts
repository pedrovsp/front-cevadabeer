import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerComplexityText, BeerTypeText } from '../../models/beer.enum';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { BeerDialogComponent } from '../beer-dialog/beer-dialog.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  imgUrl = environment.S3_URL;
  extension = environment.IMG_TYPE;
  
  @Input('beer') beer: Beer;
  Complexity = BeerComplexityText;
  Style = BeerTypeText;

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  getImgUrl() {
  //  return this.imgUrl + this.beer.id + this.extension;
  }


  openBeerDialog() {
    this._dialog.open(BeerDialogComponent, {
      data: {
        beer: this.beer
      }
    });
  }

}
