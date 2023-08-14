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
  const streamBalance = () => {
    let msg = {};
    msg.command = "getBalance";
    msg.streamSessionId = "from login response";
    console.log('Streaming Balance Data');
    send(msg)
  }

  const streamCandles = () => {
    let msg = {}
    msg.command = "getCandles";
    msg.streamSessionId = "from login response";
    console.log('Streaming Candle Data')
    send(msg)
  }

  const streamProfits = () => {
    let msg = {}
    msg.command = "getProfits"
    msg.streamSessionId = "from login response";
    console.log('Streaming Profits Data')
    send(msg);
  }
  const streamTrades = () => {
    let msg = {};
    msg.command = "getTrades"
    msg.streamSessionId = "from login response";
    console.log('Streaming User Trades Data');
    send(msg);
  }
  const getAllSymbols = () => {
    let msg = {};
    msg.command = "getAllSymbols";
    console.log('Getting list of symbols');
    send(msg)
  }
  const getCalendar = () => {
    let msg = {}
    msg.command = "getCalendar"
    console.log("Get calander list")
    send(msg)
  }
  const getCandles = () => {
    let msg = {};
    msg.command = "getCandles";
    console.log('Getting interval of candles every 1 minute');
    send(msg)
  }
  const getTrades = () => {
    let msg = {};
    msg.command = "getTrades";
    msg.arguments = {
        "openedOnly": true
    }
  }
  const getTradeRecords = (orders) => {
    let msg = {};
    msg.command = "getTradeRecords";
    msg.arguments = {
        "orders": [...orders]
    };
    console.log("Get all trades with the order number");
    send(msg);
  }  
  const parseGetAllSymbols = (returnData) => {
    console.log(returnData.map(item => ({
            symbol: item.symbol,
            ask: item.ask,
            bid: item.bid,
            descr: item.description
        }
    )))
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
              parseGetAllSymbols(response)
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