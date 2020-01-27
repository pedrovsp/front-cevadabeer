import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerComplexityText, BeerTypeText } from '../../models/beer.enum';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input('beer') beer: Beer;
  Complexity = BeerComplexityText;
  Style = BeerTypeText;

  constructor() { }

  ngOnInit() {
  }

}
