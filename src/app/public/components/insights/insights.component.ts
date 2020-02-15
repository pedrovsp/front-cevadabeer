import { Component, OnInit, Input } from '@angular/core';
import { Insight } from '../../models/insight.model';
import { Production } from '../../models/production.model';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  @Input() producoes: Production[];
  @Input() cervejas: Beer[];

  currentInsight: Insight;
  insights: Insight[] = [];

  constructor() { }

  ngOnInit() {
    this.insight1();
    this.insight2();
    this.insight3();
    this.currentInsight = this.insights[0]
  }

  previous() {
    if (this.currentInsight.id - 1 >= 0)
      this.currentInsight = this.insights.find(i => i.id === (this.currentInsight.id - 1))
    else
      this.currentInsight = this.insights[this.insights.length - 1];
  }

  next() {
    if (this.currentInsight.id + 1 < this.insights.length)
      this.currentInsight = this.insights.find(i => i.id === (this.currentInsight.id + 1))
    else
      this.currentInsight = this.insights[0];
  }

  insight1() {
    let qtdProduzida = 0;
    let qtdRotulos = this.cervejas.length;
    this.producoes.map((p) => qtdProduzida += p.quantidadeEmLitros)

    this.insights.push(new Insight({
      id: 0,
      text: `Voce ja produziu ${qtdProduzida}L de cerveja dividido em ${qtdRotulos} rotulos.` 
    }));
  }

  insight2() {
    let nomeCerveja = `Filha da fruta`
    this.insights.push(new Insight({
      id: 1,
      text: `Sua cerveja mais produzida é: ${nomeCerveja}`
    }));

  }

  insight3() {
    let cerveja = this.cervejas.reduce((p, n) => p.receita.length > n.receita.length ? p : n)
    this.insights.push(new Insight({
      id: 2,
      text: `Sua receita mais cara é: ${cerveja.nome}`
    }));

  }

}
