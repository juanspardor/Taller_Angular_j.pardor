import { Component, OnInit } from '@angular/core';

import { Serie } from './serie';
import { SerieListService } from './serie-list.service'

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  promedio = 0 ;
  totalTemporadas = 0;
  constructor(private serieListService: SerieListService) { }

  getSeries()
  {
    this.serieListService.getSeries().subscribe(recibidas => {
      this.series = recibidas;
      recibidas.forEach(actual => {this.totalTemporadas += actual.seasons});
      this.promedio = this.totalTemporadas/recibidas.length;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

}
