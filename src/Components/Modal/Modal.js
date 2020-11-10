import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = ({ nick, handleKeyup, socket }) => {
  const [render, setRender] = useState(true);

  const handleClick = () => {
    if (nick.length > 0) {
      setRender(false);
      socket.emit('newUser', { nick });
      window.addEventListener('beforeunload', () => {
        socket.emit('leaveUser', { nick });
      });
    }
  };

  if (render) {
    return (
      <ModalWrap>
        <NicknameContainer>
          <TitleContainer>
            <span>닉네임 입력</span>
          </TitleContainer>
          <InputContainer>
            <input onKeyUp={handleKeyup} placeholder="입력하시오" />
            <button onClick={handleClick}>확인</button>
          </InputContainer>
        </NicknameContainer>
      </ModalWrap>
    );
  } else {
    return <></>;
  }
};

export default Modal;

const ModalWrap = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(60, 60, 60, 0.7);
`;

const NicknameContainer = styled.div`
  position: relative;
  top: 20%;
  left: 10%;
  height: 200px;
  width: 400px;
  background-color: white;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  span {
    font-weight: 700;
  }
`;

const InputContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
  input {
    height: 50px;
    width: 250px;
    ${({ theme }) => theme.border('1px', 'solid', 'black')}
  }
  button {
    cursor: pointer;
    height: 50px;
    width: 50px;
    ${({ theme }) => theme.border('1px', 'solid', 'rgb(192, 192, 192)')};
    :hover {
      background-color: rgb(192, 192, 192);
    }
  }
`;
