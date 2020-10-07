import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Main.scss";

const Main = () => {
  // useState(초기값) = [초기값, 값을 통제하는 함수]
  // 비구조화 할당 (배열, 객체)
  const [value, setValue] = useState({
    id: 0,
    number: 0,
  });

  const { id, number } = value;
  // 이렇게 썼지만 useState로 모든 변수를 한번에 관리하는 것보다
  // 변하는 값끼리 묶어서

  // state 값을 갱신하는 함수
  // 기존값(...value)에 변하는 key, value 값을 새롭게!!! 추가한다.
  // 이런 식으로 해야 변화를 인식할 수 있다고 한다.
  // useState 다룰 때에는 두번째 파라미터로 콜백함수를 넣을 수 없다고 한다.
  const plusNum = () => {
    setValue({
      ...value,
      number: number + 1,
    });
  };

  // render 직후에 실행되는데 콜백함수로 [] 넣어주면 처음에만 실행된다(=컴디마)
  useEffect(() => {
    console.log("렌더링!");
  }, []);

  // render 직후에 실행되는데 콜백함수로 [변수] 넣어주면
  // 해당 변수가 변했을 때에만 실행된다(=컴디업, 비동기처리)
  useEffect(() => {
    console.log(number);
  }, [number]);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Flex>
      <div className="Main">
        <Border>
          <div>Main</div>
          <div>
            <span>{number}만큼 담대하게</span>
          </div>
          <button name={id} onClick={plusNum}>
            담대버튼
          </button>
        </Border>
      </div>
    </Flex>
  );
};

const Border = styled.div`
  border: 1px solid black;
  width: 500px;
  text-align: center;
  margin: 10px 0;
  padding: 20px 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
