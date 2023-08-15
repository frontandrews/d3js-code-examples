import React, { useEffect } from 'react';
import * as d3 from 'd3';

const DonutChart = () => {
  useEffect(() => {
    const data = [
      { label: "Apples", value: 30 },
      { label: "Bananas", value: 20 },
      { label: "Oranges", value: 15 },
      { label: "Grapes", value: 25 },
      { label: "Berries", value: 10 }
    ];

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select("#donutChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.value);

    const pieData = pie(data);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius);

    svg.selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    svg.selectAll("text")
      .data(pieData)
      .enter()
      .append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text(d => d.data.label);

  }, []);

  return (
    <div>
      <h2>Donut Chart</h2>
      <div id="donutChart"></div>
    </div>
  );
}

export default DonutChart;