import React, { useEffect } from 'react';
import * as d3 from 'd3';

const ScatterPlot = () => {
  useEffect(() => {
    const data = [
      { x: 10, y: 20 },
      { x: 20, y: 30 },
      { x: 30, y: 15 },
      { x: 40, y: 45 },
      { x: 50, y: 25 },
      { x: 60, y: 35 }
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#scatterPlot")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .nice()
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .nice()
      .range([height, 0]);

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 5)
      .attr("fill", "steelblue");

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
      <h2>Scatter Plot</h2>
      <div id="scatterPlot"></div>
    </div>
  );
}

export default ScatterPlot;
