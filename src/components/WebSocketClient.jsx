import { useEffect, useState} from 'react';

const WebSocketClient = ({ onDataReceived }) => {
    // const [msg, setMsg] = useState({})
    useEffect(() => {
    let url = "wss://ws.xapi.pro/demo";
    console.log('Connecting to: ' + url);
    const ws = new WebSocket(url);
  const send = (jsonMessage) => {
    try {
        let msg = JSON.stringify(jsonMessage);
        ws.send(msg);
        console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch (Exception) {
        console.error('Error while sending data: ' + Exception.message);
    }
  }
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
  const logout = () => {
      let msg = {}
      msg.command = "logout"
  }
  const getAllSymbols = () => {
    let msg = {};
    msg.command = "getAllSymbols";
    console.log('Getting list of symbols');
    send(msg)
  }
  const parseGetAllSymbols = (returnData) => {
    returnData.map(item => ({
            symbol: item.symbol,
            ask: item.ask,
            bid: item.bid,
            descr: item.description
        }
    ))
  }

  const connect = () => {
  ws.onopen = () => {
          console.log('Connected');
          login(process.env.XTB_USERID, process.env.XTB_PASSWORD);
    }
    ws.onmessage = (event) => {
  console.log('Received: ' + event.data);
  try {
      let response = JSON.parse(event.data);
      if (response.status == true) {
          if (response.streamSessionId != undefined) {
              getAllSymbols();
          } else {
              console.log(parseGetAllSymbols(response.returnData));
          }
      } else {
          console.log('Error: ' + response.errorDescr)
      }
  }  catch (Exception) {
      console.log(`:(  ${Exception}`)
  }
  }
  ws.onclose = (event) => {
      console.log('Connection closed');
  }
  };
    connect();
  }, [])
  return null;
};

export default WebSocketClient;