import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beer } from '../../models/beer.model';
import { Recipe } from '../../models/recipe.model';

export interface DialogData {
  beer: Beer;
}

@Component({
  selector: 'app-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.scss']
})
export class BeerDialogComponent implements OnInit {

  beer: Beer;

  constructor(
    public dialogRef: MatDialogRef<BeerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.beer = this.data.beer;
  }
  
  getUnd(receita: Recipe): string {
    if (receita.ingrediente.nome === 'Agua')
      return 'ml';
    else
      return 'g'
  }

}
