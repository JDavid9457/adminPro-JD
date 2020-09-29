import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  graphic: any = {
    'graphic1': {
    'labels': ['con Frijoles', 'Con Natilla', 'Con Tocino'],
    'data':[24,30,46],
    'type':'doughnut',
    'leyenda':'El pan  se come con'
    },
    'graphic2': {
      'labels': ['hombres', 'Mujeres'],
      'data':[ 7700000,7108700],
      'type':'doughnut',
      'leyenda':'Entrevistados'
      },
      'graphic3': {
        'labels': ['con Frijoles', 'Con Natilla', 'Con Tocino'],
        'data':[24,30,46],
        'type':'doughnut',
        'leyenda':'El pan  se come con'
        },
        'graphic4': {
          'labels': ['Gatos', 'Perros', 'Otros'],
          'data':[90,80,46],
          'type':'doughnut',
          'leyenda':'Mascotas'
          },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
