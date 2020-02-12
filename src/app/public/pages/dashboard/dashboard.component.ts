import { Component, OnInit } from '@angular/core';
import { Production } from '../../models/production.model';
import { RecipesService } from '../../services/recipes.service';
import { tap } from 'rxjs/operators';
import { Igredient } from '../../models/ingridient.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productionList: Production[] = [];
  ingredientes: Igredient[] = [];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Ingredientes' }
  ];
  
  constructor(private recipesSvc: RecipesService) { }

  ngOnInit() {
    this.recipesSvc.getIngredients().pipe(
      tap(ig => {
        ig.forEach(p => {
          if (p.nome !== 'Agua')
            this.ingredientes.push(new Igredient(p))
        });

        this.renderChart();
      })
    ).subscribe()

    this.recipesSvc.getProductions().pipe(
      tap((prd: Production[]) => {
        prd.forEach(p => this.productionList.push(new Production(p)));
      })
    ).subscribe()
  }

  renderChart() {
    this.ingredientes.forEach(ig => {
      this.barChartLabels.push(ig.nome);
      this.barChartData[0].data.push(ig.quantidade);
    })
  }

}
