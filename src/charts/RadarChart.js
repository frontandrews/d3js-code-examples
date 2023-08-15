import React, { useEffect } from 'react';
import * as d3 from 'd3';

const RadarChart = () => {
  useEffect(() => {
    const data = [
      { axis: "Category A", value: 0.6 },
      { axis: "Category B", value: 0.8 },
      { axis: "Category C", value: 0.5 },
      { axis: "Category D", value: 0.9 },
      { axis: "Category E", value: 0.7 },
    ];

    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;

    const svg = d3.select("#radarChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const radius = Math.min(width, height) / 2;

    const angleSlice = Math.PI * 2 / data.length;

    const radarLine = d3.lineRadial()
      .angle((d, i) => i * angleSlice)
      .radius(d => radius * d.value)
      .curve(d3.curveLinearClosed);

    const axis = svg.selectAll(".axis")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis.append("line")
      .attr("x1", centerX)
      .attr("y1", centerY)
      .attr("x2", (d, i) => centerX + radius * Math.cos(i * angleSlice))
      .attr("y2", (d, i) => centerY + radius * Math.sin(i * angleSlice))
      .attr("class", "line");

    const blobs = svg.selectAll(".radar-blob")
      .data([data])
      .enter()
      .append("path")
      .attr("class", "radar-blob")
      .attr("d", radarLine)
      .style("fill-opacity", 0.4)
      .style("fill", "steelblue");

    const labels = axis.append("text")
      .attr("class", "label")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => centerX + (radius + 10) * Math.cos(i * angleSlice))
      .attr("y", (d, i) => centerY + (radius + 10) * Math.sin(i * angleSlice))
      .text(d => d.axis);

  }, []);

  return (
    <div>
      <h2>Radar Chart</h2>
      <div id="radarChart"></div>
    </div>
  );
}

export default RadarChart;
