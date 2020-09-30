import React from "react";
import styled from "styled-components";
import Chart from "./Chart";
import "./Graph.scss";

const Graph = () => {
  const options = {
    xAxis: {
      categories: "datetime",
    },
    chart: {
      type: "line",
    },
    series: [
      {
        data: [
          29.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
        ],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 3600 * 1000,
      },
    ],
  };

  return (
    <div className="Graph">
      <Container>
        <div className="graphContainer">
          <Chart options={options} />
        </div>
      </Container>
      <Container>
        <div className="stocksContainer"></div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 80%;
  margin: 10px;
`;

export default Graph;
