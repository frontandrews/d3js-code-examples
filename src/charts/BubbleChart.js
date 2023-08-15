import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BubbleChart = () => {
  useEffect(() => {
    const data = [
      { x: 10, y: 20, size: 30 },
      { x: 20, y: 30, size: 50 },
      { x: 30, y: 15, size: 20 },
      { x: 40, y: 45, size: 70 },
      { x: 50, y: 25, size: 40 },
      { x: 60, y: 35, size: 60 }
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#bubbleChart")
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

    const radius = d3.scaleSqrt()
      .domain([0, d3.max(data, d => d.size)])
      .range([0, 20]);

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", d => radius(d.size))
      .attr("fill", "steelblue")
      .attr("opacity", 0.7);

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
      <h2>Bubble Chart</h2>
      <div id="bubbleChart"></div>
    </div>
  );
}

export default BubbleChart;