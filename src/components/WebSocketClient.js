import { useEffect } from 'react';
import io from 'socket.io-client';

const login = (userId, password) => {
    let msg = {}
    let ars = {
        userId: userId,
        password: password
    }
    msg.command = "login";
    msg.arguments = ars;
    console.log('Trying to log in as' + msg.arguments.userId)
    send(msg);
}


const WebSocketClient = ({ onDataReceived }) => {
  useEffect(() => {
    const socket = io('wss://ws.xapi.pro/demo');

    socket.on('connect', () => {
        console.log(socket.id);
      console.log('WebSocket connected');
    });

    socket.on('data', (data) => {
      onDataReceived(data);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, [onDataReceived]);

  return null;
};

export default WebSocketClient;