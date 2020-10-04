import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "./Chart";
import "./Graph.scss";

const Graph = () => {
  const [chartData, updateData] = useState({});
  const [stockIdx, plusIdx] = useState(1);

  const ClickEvent = () => {
    fetch("/data/stockData.json")
      .then((res) => res.json())
      .then((res) => {
        updateData(res.stock[0]);
      });
  };

  const getStockData = (idx) => {
    console.log("success");
    fetch("/data/stockSeriesData.json")
      .then((res) => res.json())
      .then((res) => {
        updateData({
          ...chartData,
          series: [
            {
              data: res.data[idx].value,
              pointStart: Date.UTC(2015, 1, 1),
              pointInterval: 24 * 3600 * 1000 * 1,
              name: res.data[idx].Name,
            },
          ],
        });
      });
  };

  const changeData = () => {
    plusIdx(stockIdx + 1);
    getStockData(stockIdx);
  };

  useEffect(() => {
    ClickEvent();
    getStockData(0);
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
          <button onClick={changeData}>ChageStockData</button>
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
  max-width: 480px;
  width: 100%;
  height: 80%;
  margin: 10px;
`;

export default Graph;
