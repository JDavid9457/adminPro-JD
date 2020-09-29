import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graphicDonates',
  templateUrl: './graphicDonates.component.html',
  styleUrls: ['./graphicDonates.component.css']
})
export class GraphicDonatesComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: String[] = [];
  @Input('chartData') doughnutChartData: number []=[];
  @Input('chartType') doughnutChartType: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
