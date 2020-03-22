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
  showModel = true;

  public ngOnInit() {

    const counties = new Counties().counties;
    const width = 1020;
    const height = 1500;

    const projection = d3.geoMercator()
      .scale(12090)
      .center([-9.8, 53.47])
      .translate([ width / 2, height / 2])

    const svg = d3.select('#ireland').append('svg')
      .attr('width', 1400)
      .attr('height', height);
    const path = d3.geoPath()
      .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');

    d3.json('../assets/maps/ireland_counties.geojson')

      .then((topology: any) => {
        for ( let i = 0; i < 35; i++) {
          this.regions.push(topology.features[i].properties.name);
        }

        g.selectAll('path')
          .data(topology.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('width', 500)
          .attr('class', 'counties')
          .attr('fill', '#218F5B')
          .attr('stroke', '#A0FFD3')
          .attr('cursor', 'pointer')
          .on('mouseover', function(d) {
            const mousePos = d3.mouse(this);
            const posX = Math.floor(mousePos[0]);
            const posY = Math.floor(mousePos[1]);
            for ( let i = 0; i < 35; i++) {
              if ( d.properties.name === topology.features[i].properties.name ) {
                d3.select(this)
                .style('fill', 'rgb(51, 196, 128)');

                d3.select('.countyNames')
                .style('transform', `translate( ${posX + 60}px, ${posY - 1470}px )`)
                .style('background-color', '#999999ee')
                .style('width', '200px')
                .style('color', 'white')
                .style('padding', '4px')
                .style('padding-left', '8px')
                .style('padding-right', '8px')
                .style('border-radius', '2px')
                .style('display', 'block')
                .text(d.properties.name);
                if (d.properties.name === 'Laoighis') {
                  d3.select('.countyNames')
                  .text('Laois')
                }
                if (d.properties.name_alt === 'Corcaigh city') {
                  d3.select('.countyNames')
                  .text('Cork City');
                }
                if (d.properties.name_alt === 'Gaillimh city') {
                  d3.select('.countyNames')
                  .text('Galway City');
                }
                if (d.properties.name_alt === null) {
                  d3.select('.countyNames')
                  .text('outer island');
                }

                console.log(d.properties.name_alt);
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
          })
          .on('click', d => {
            d3.select('.countyNames')
            .style('display', 'none');

            d3.select('.countyModal')
            .style('width', '660px')
            .style('height', '660px')
            .style('background-color', '#ccccccdd')
            .style('border-radius', '12px')
            .style('position', 'fixed')
            .style('display', 'relative')
            .style('transform', `translate( 500px, -2028px )`);
          });
        });
      }
    showHideModal() {
      document.getElementById('worldMap').style.display = 'none';

    }
}
