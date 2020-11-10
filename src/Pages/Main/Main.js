import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import Chatting from '../../Components/Chatting/Chatting';
import Modal from '../../Components/Modal/Modal';
import chattingApi from '../../Config';

const socket = socketio.connect(`${chattingApi}`);

const Main = () => {
  const [nick, setNick] = useState('');

  const handleKeyup = (e) => {
    setNick(e.target.value);
  };

  return (
    <>
      <Chatting nick={nick} socket={socket} />
      <Modal nick={nick} handleKeyup={handleKeyup} socket={socket} />
    </>
  );
};

export default Main;
