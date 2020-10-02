import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "./Chart";
import "./Graph.scss";

const Graph = () => {
  const [chartData, updateData] = useState({});

  // const options = {
  //   xAxis: {
  //     type: "datetime",
  //     dateTimeLabelFormats: {
  //       day: "%d %b",
  //     },
  //   },
  //   chart: {
  //     type: "line",
  //   },
  //   series: [
  //     {
  //       data: [
  //         29.9,
  //         71.5,
  //         106.4,
  //         129.2,
  //         144.0,
  //         176.0,
  //         135.6,
  //         148.5,
  //         216.4,
  //         194.1,
  //         95.6,
  //         54.4,
  //         29.1,
  //         71.2,
  //         106.4,
  //         129.2,
  //         144.1,
  //         176.0,
  //         135.6,
  //         148.8,
  //         216.4,
  //         194.5,
  //         95.6,
  //         54.4,
  //       ],
  //       pointStart: Date.UTC(2013, 9, 1),
  //       pointInterval: 24 * 3600 * 1000 * 1,
  //     },
  //   ],
  // };

  // const ClickEvent = () => {
  //   updateData(options);
  // };
  const ClickEvent = () => {
    fetch("/data/stockData.json")
      .then((res) => res.json())
      .then((res) => {
        updateData(res.stock[0]);
      });
  };

  useEffect(() => {
    ClickEvent();
  }, []);

  useEffect(() => {
    console.log(chartData);
  });

  return (
    <div className="Graph">
      <GraphContainer>
        <div className="graphContainer">
          <Chart options={chartData} />
        </div>
      </GraphContainer>
      <Container>
        <div className="stocksContainer">
          <button>TRY</button>
        </div>
      </Container>
    </div>
  );
};

const GraphContainer = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 80%;
  margin: 10px;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  height: 80%;
  margin: 10px;
`;

export default Graph;
