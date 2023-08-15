import React, { useEffect } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud'; // Make sure to install 'd3-cloud' package

const WordCloud = () => {
  useEffect(() => {
    const data = [
      { text: "apple", size: 30 },
      { text: "banana", size: 20 },
      { text: "orange", size: 25 },
      { text: "grapes", size: 15 },
      { text: "berries", size: 10 },
      // Add more words and sizes as needed
    ];

    const width = 800;
    const height = 600;

    const svg = d3.select("#wordCloud")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const layout = cloud()
      .size([width, height])
      .words(data.map(d => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(0)
      .font("sans-serif")
      .fontSize(d => d.size)
      .on("end", draw);

    layout.start();

    function draw(words) {
      svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => `${d.size}px`)
        .style("font-family", "sans-serif")
        .style("fill", "steelblue")
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text(d => d.text);
    }
  }, []);

  return (
    <div>
      <h2>Word Cloud</h2>
      <div id="wordCloud"></div>
    </div>
  );
}

export default WordCloud;
