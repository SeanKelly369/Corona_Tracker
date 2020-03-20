import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';
import { zoom } from 'd3';

@Component({
  selector: 'app-ireland-map',
  templateUrl: './ireland-map.component.html',
  styleUrls: ['./ireland-map.component.css']
})
export class IrelandMapComponent implements OnInit {
  name = 'd3';
  mapFeatures; any;

  constructor() { }

  ngOnInit(): void {

    const width = 620;
    const height = 396;
    let data;

    const projection = d3.geoMercator()
      .translate([ width / 2, height / 2])
      .scale(100);

    const svg = d3.select('#ireland').append('svg')
      .attr('width', width)
      .attr('height', height);
    const path = d3.geoPath()
      .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');

    const counties = svg.append('svg:g')
    .attr('id', 'ireland');
    console.log(counties);

    d3.json('ireland.json', json => {
      counties.selectAll('path')
        .data(json.features)
        .enter().append('path')
        .attr('class', 'ireland')
        .attr('d', path);
    });

  }

}
