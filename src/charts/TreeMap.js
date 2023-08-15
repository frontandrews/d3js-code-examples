import React, { useEffect } from 'react';
import * as d3 from 'd3';

const TreeMap = () => {
  useEffect(() => {
    const data = {
      name: "Root",
      children: [
        { name: "Category A", value: 50 },
        { name: "Category B", value: 30 },
        { name: "Category C", value: 20 }
      ]
    };

    const width = 400;
    const height = 400;

    const svg = d3.select("#treeMap")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const treemap = d3.treemap()
      .size([width, height])
      .padding(1)
      .round(true);

    const root = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);

    treemap(root);

    const cell = svg.selectAll("g")
      .data(root.leaves())
      .enter().append("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    cell.append("rect")
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("fill", d => color(d.parent.data.name));

    cell.append("text")
      .selectAll("tspan")
      .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
      .enter().append("tspan")
      .attr("x", 4)
      .attr("y", (d, i) => 13 + i * 10)
      .text(d => d);

  }, []);

  return (
    <div>
      <h2>Tree Map</h2>
      <div id="treeMap"></div>
    </div>
  );
}

export default TreeMap;