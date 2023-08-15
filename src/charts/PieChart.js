import React, { useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
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

        // Create an SVG element for the pie chart
        const svg = d3.select("#pieChart")
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie()
            .value(d => d.value);

        const pieData = pie(data);

        const arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        const arcs = svg.selectAll("arc")
            .data(pieData)
            .enter()
            .append("g");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color(i));

        arcs.append("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .text(d => d.data.label);

    }, []);

    return (
        <div>
            <h2>Pie Chart</h2>
            <svg id="pieChart" width="400" height="400"></svg>
        </div>
    );
}

export default PieChart;
