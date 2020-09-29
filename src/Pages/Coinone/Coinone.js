import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import "./Coinone.scss";

const Coinone = () => {
  const [tag, selectTag] = useState({
    tagContents: [],
    tagIdx: 0,
  });

  const { tagContents, tagIdx } = tag;

  const clickTag = (idx) => {
    selectTag({
      ...tag,
      tagIdx: idx,
    });
  };

  const getDataInitial = () => {
    selectTag({
      ...tag,
      tagContents: [
        ...tagContents,
        "#거래량 많은",
        "#급등하는",
        "#급락하는",
        "#최근상장",
      ],
    });
  };

  useEffect(() => {
    getDataInitial();
  }, []);

  return (
    <div className="Coinone">
      <Nav />
      <div className="searchWrap">
        <div className="searchSection">
          <ul className="tagContainer">
            {tagContents.map((tagContent, idx) => {
              return (
                <TagStyle tagIdx={tagIdx} idx={idx}>
                  <li key={idx} onClick={() => clickTag(idx)}>
                    {tagContent}
                  </li>
                </TagStyle>
              );
            })}
          </ul>
        </div>
        <div className="searchBar">
          <input placeholder="코인 검색"></input>
          <span className="magnifyingGlass"></span>
        </div>
      </div>
      <div className="graphSection"></div>
      <div className="introduceSection"></div>
      <footer>footer 예정</footer>
    </div>
  );
};

const TagStyle = styled.li`
  cursor: pointer;
  color: ${(props) => (props.idx === props.tagIdx ? "black" : "lightgray")};
  border-bottom: ${(props) =>
    props.idx === props.tagIdx ? "2px solid black" : "none"};
  padding-bottom: 10px;
  margin: 10px;
  font-size: 18px;
  font-weight: 700;
  transition: color 0.2s ease-out;
  &:hover {
    color: black;
  }
`;

export default Coinone;
