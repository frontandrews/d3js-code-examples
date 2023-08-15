import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AreaChart from './charts/AreaChart';
import BubbleChart from './charts/BubbleChart';
import DonutChart from './charts/DonutChart';
import GroupedBarChart from './charts/GroupedBarChart';
import Heatmap from './charts/Heatmap';
import HorizontalBarChart from './charts/HorizontalBarChart';
import LineChart from './charts/LineChart';
import MultilineChart from './charts/MultilineChart';
import PieChart from './charts/PieChart'; // Remove this duplicate import
import ScatterPlot from './charts/ScatterPlot';
import TreeMap from './charts/TreeMap';
import VerticalBarChart from './charts/VerticalBarChart';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/pie-chart">Pie Chart</Link>
              </li>
              <li>
                <Link to="/area-chart">Area Chart</Link>
              </li>
              <li>
                <Link to="/bubble-chart">Bubble Chart</Link>
              </li>
              <li>
                <Link to="/donut-chart">Donut Chart</Link>
              </li>
              <li>
                <Link to="/grouped-bar-chart">Grouped Bar Chart</Link>
              </li>
              <li>
                <Link to="/heatmap">Heatmap</Link>
              </li>
              <li>
                <Link to="/horizontal-bar-chart">Horizontal Bar Chart</Link>
              </li>
              <li>
                <Link to="/line-chart">Line Chart</Link>
              </li>
              <li>
                <Link to="/multiline-chart">Multiline Chart</Link>
              </li>
              <li>
                <Link to="/scatter-plot">Scatter Plot</Link>
              </li>
              <li>
                <Link to="/tree-map">Tree Map</Link>
              </li>
              <li>
                <Link to="/vertical-bar-chart">Vertical Bar Chart</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Routes>
            <Route path="/pie-chart" element={<PieChart />} />
            <Route path="/area-chart" element={<AreaChart />} />
            <Route path="/bubble-chart" element={<BubbleChart />} />
            <Route path="/donut-chart" element={<DonutChart />} />
            <Route path="/grouped-bar-chart" element={<GroupedBarChart />} />
            <Route path="/heatmap" element={<Heatmap />} />
            <Route path="/horizontal-bar-chart" element={<HorizontalBarChart />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/multiline-chart" element={<MultilineChart />} />
            <Route path="/scatter-plot" element={<ScatterPlot />} />
            <Route path="/tree-map" element={<TreeMap />} />
            <Route path="/vertical-bar-chart" element={<VerticalBarChart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
