import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Counties } from './counties';

@Component({
  selector: 'app-ireland-map',
  templateUrl: './ireland-map.component.html',
  styleUrls: ['./ireland-map.component.css']
})
export class IrelandMapComponent implements OnInit {

  name = 'd3';
  mapFeatures: any;
  airports: any;
  regions = [];

  public ngOnInit() {

    const counties = new Counties().counties;
    const width = 1020;
    const height = 1500;

    const projection = d3.geoMercator()
      .scale(12090)
      .center([-9.6, 53.47])
      .translate([ width / 2, height / 2])

    const svg = d3.select('#ireland').append('svg')
      .attr('width', 1600)
      .attr('height', height);
    const path = d3.geoPath()
      .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');

    // console.log(g);

    d3.json('../assets/maps/ireland_counties.geojson')

      .then((topology: any) => {
        // console.log(topology.features);

        for ( let i = 0; i < 35; i++) {
          this.regions.push(topology.features[i].properties.name);
        }
        console.log(this.regions);

        g.selectAll('path')
          .data(topology.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('width', 500)
          .attr('class', 'counties')
          .attr('fill', '#218F5B')
          .attr('stroke', '#A0FFD3')
          .on('mouseover', function(d) {
            // const mousePos = d3.mouse(this);
            // const posX = Math.floor(mousePos[0]);
            // const posY = Math.floor(mousePos[1]);
            for ( let i = 0; i < 35; i++) {
              if ( d.properties.name === topology.features[i].properties.name ) {
                d3.select(this)
                .style('fill', 'rgb(51, 196, 128)')
                // .style('transform', `translate( ${posX + 8}px, ${posY + 10}px )`)
                .style('background-color', '#33333388')
                .style('padding', '4px')
                .style('padding-left', '8px')
                .style('padding-right', '8px')
                .style('border-radius', '2px')
                .style('display', 'block')
                .text(d.properties.name);
              }
            }
          })
          .on('mouseout', d => {
            for ( let i = 0; i < 35; i++) {
              if ( d.properties.name !== topology.features[i].properties.name ) {
                d3.selectAll('.counties')
                .style('fill', '#218F5B')
                .text('');
              }
            }
          });
        });
  }
}
