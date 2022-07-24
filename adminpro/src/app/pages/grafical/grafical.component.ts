import { Component } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent {

  // Doughnut
  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: MultiDataSet = [
      [ 350, 450, 100 ]
  ];

  public colors: Color[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    }
  ];

}
