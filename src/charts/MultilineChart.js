import React, { useEffect } from 'react';
import * as d3 from 'd3';

const MultilineChart = () => {
  useEffect(() => {
    const data = [
      [
        { x: 1, y: 5 },
        { x: 2, y: 9 },
        { x: 3, y: 7 },
        { x: 4, y: 12 },
        { x: 5, y: 6 },
        { x: 6, y: 8 },
      ],
      [
        { x: 1, y: 8 },
        { x: 2, y: 5 },
        { x: 3, y: 10 },
        { x: 4, y: 6 },
        { x: 5, y: 9 },
        { x: 6, y: 4 },
      ]
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#multilineChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([1, 6])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 15])
      .nice()
      .range([height, 0]);

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    data.forEach(series => {
      svg.append("path")
        .datum(series)
        .attr("class", "line")
        .attr("d", line);
    });

    svg.selectAll(".dot")
      .data(data.flat())
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
      <h2>Multiline Chart</h2>
      <div id="multilineChart"></div>
    </div>
  );
}

export default MultilineChart;
