
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Youtube } from 'lucide-react';
import { VISITED_COUNTRIES } from '../constants';

const WorldMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 500;
    const svg = d3.select(svgRef.current);
    
    // Clear previous elements
    svg.selectAll("*").remove();

    const g = svg.append("g");

    const projection = d3.geoNaturalEarth1()
      .scale(160)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
      const countries = topojson.feature(data, data.objects.countries as any) as any;

      g.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country-path')
        .attr('d', path as any)
        .attr('fill', (d: any) => VISITED_COUNTRIES.includes(d.properties.name) ? '#10b981' : '#f1f5f9')
        .attr('stroke', '#fff')
        .attr('stroke-width', 0.5)
        .style("transition", "fill 0.3s ease")
        .on('mouseover', function(e, d: any) {
           d3.select(this)
            .attr('fill', VISITED_COUNTRIES.includes(d.properties.name) ? '#059669' : '#cbd5e1');
        })
        .on('mouseout', function(e, d: any) {
           d3.select(this)
            .attr('fill', VISITED_COUNTRIES.includes(d.properties.name) ? '#10b981' : '#f1f5f9');
        });

      // Add a small title tooltip to each country
      g.selectAll('path').append('title').text((d: any) => d.properties.name);
    });
  }, []);

  return (
    <div className="py-24 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Footprints</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          We have visited over 40 countries and still counting. Explore the world through our lens.
        </p>
        
        <div className="relative inline-block w-full max-w-5xl bg-slate-50/50 rounded-[3rem] p-4 md:p-10 shadow-inner border border-slate-100 overflow-hidden">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 500"
            className="w-full h-auto"
          />
          
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white text-left hidden sm:block">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-4 h-4 rounded-full bg-[#10b981] shadow-sm"></div>
              <span className="text-xs font-bold text-slate-700">Visited</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#f1f5f9] border border-slate-200 shadow-sm"></div>
              <span className="text-xs font-bold text-slate-700">Not visited</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="https://www.youtube.com/@Joel_Emilia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
          >
            <Youtube /> Watch the Adventures
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;