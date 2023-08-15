import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Heatmap = () => {
  useEffect(() => {
    const data = [
      [10, 20, 30, 40, 50],
      [15, 25, 35, 45, 55],
      [20, 30, 40, 50, 60],
      [25, 35, 45, 55, 65],
      [30, 40, 50, 60, 70],
    ];

    const width = 600;
    const height = 400;

    const colorScale = d3.scaleSequential(d3.interpolateViridis)
      .domain([d3.min(data.flat()), d3.max(data.flat())]); // Customize the color domain

    const svg = d3.select("#heatmap")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const cellWidth = width / data[0].length;
    const cellHeight = height / data.length;

    const cells = svg.selectAll(".cell")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(0, ${i * cellHeight})`)
      .selectAll(".cell")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * cellWidth)
      .attr("width", cellWidth)
      .attr("height", cellHeight)
      .attr("class", "cell")
      .style("fill", d => colorScale(d));

  }, []);

  return (
    <div>
      <h2>Heatmap</h2>
      <div id="heatmap"></div>
    </div>
  );
}

export default Heatmap;
