import React, { useEffect } from 'react';
import * as d3 from 'd3';

const AreaChart = () => {
  useEffect(() => {
    const data = [
      { x: 1, y: 5 },
      { x: 2, y: 9 },
      { x: 3, y: 7 },
      { x: 4, y: 12 },
      { x: 5, y: 6 },
      { x: 6, y: 8 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#areaChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([1, 6])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .nice()
      .range([height, 0]);

    const area = d3.area()
      .x(d => x(d.x))
      .y0(height)
      .y1(d => y(d.y));

    svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area);

    svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 4);

    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));
  }, []);

  return (
    <div>
      <h2>Area Chart</h2>
      <div id="areaChart"></div>
    </div>
  );
}

export default AreaChart;
