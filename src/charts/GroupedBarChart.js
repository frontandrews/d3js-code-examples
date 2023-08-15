import React, { useEffect } from 'react';
import * as d3 from 'd3';

const GroupedBarChart = () => {
  useEffect(() => {
    const data = [
      { category: "A", value1: 10, value2: 15 },
      { category: "B", value1: 20, value2: 25 },
      { category: "C", value1: 15, value2: 30 },
      { category: "D", value1: 25, value2: 20 }
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#groupedBarChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const categories = data.map(d => d.category);
    const valueKeys = ["value1", "value2"];

    const x0 = d3.scaleBand()
      .domain(categories)
      .range([0, width])
      .padding(0.1);

    const x1 = d3.scaleBand()
      .domain(valueKeys)
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.value1, d.value2))])
      .nice()
      .range([height, 0]);

    const color = d3.scaleOrdinal()
      .domain(valueKeys)
      .range(["#66c2a5", "#fc8d62"]);

    svg.selectAll(".bar-group")
      .data(data)
      .enter().append("g")
      .attr("class", "bar-group")
      .attr("transform", d => `translate(${x0(d.category)},0)`)
      .selectAll("rect")
      .data(d => valueKeys.map(key => ({ key, value: d[key] })))
      .enter().append("rect")
      .attr("x", d => x1(d.key))
      .attr("y", d => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", d => color(d.key));

    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0));

    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));
  }, []);

  return (
    <div>
      <h2>Grouped Bar Chart</h2>
      <div id="groupedBarChart"></div>
    </div>
  );
}

export default GroupedBarChart;