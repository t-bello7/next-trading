import { useState, useEffect, useRef } from 'react';

const parseGetAllSymbols = (returnData: any) => (
    returnData.map((item: any) => ({
            symbol: item.symbol,
            ask: item.ask,
            bid: item.bid,
            descr: item.description
        }
    ))
  )
const useWebSocket = (command : string, args={}) => {
    // arguments = 
    const [returnData, setReturnData] = useState<any>()
    const [isLoading, setIsLoading] = useState(false);
    const ws = useRef(null);
    useEffect(() => {

        ws.current = new WebSocket(`${process.env.NEXT_PUBLIC_XTB_URL}`);
        const subscribe = (subscribeData: any) => {
            try {
                ws.current.send(JSON.stringify(subscribeData))
            } catch (Exception) {
                console.error(Exception)
            }
        }
        const getAllSymbols = () => {
            console.log('Getting list of symbols');

            subscribe({
                command: "getAllSymbols"
            })
        }
        const getChartLastRequest = () => {
            console.log('Getting chart last request');
            subscribe({
                "command": "getChartLastRequest",
                "arguments": args
            })
        }
        const streamBalance = (streamId: string) => {
            subscribe({
                command: "getBalance",
                streamSessionId: streamId
            })
        }
        const login = () => {
            subscribe({
                command: "login",
                arguments: {
                    userId: process.env.NEXT_PUBLIC_XTB_USERID,
                    password: process.env.NEXT_PUBLIC_XTB_PASSWORD
                }
            })
        }
        setIsLoading(true)
        ws.current.onopen = () => {
            login();
        }
        ws.current.onmessage = (event) => {
            try {
                let response = JSON.parse(event.data);
                if (response.status == true) {
                    if (response.streamSessionId  !== undefined) {
                        if(command === "getAllSybmols"){
                            getAllSymbols()                                
                        }
                        if(command === "getCandles") {
                            // streamCandles(response.streamSessionId)
                            // streamBalance(response.streamSessionId)
                            getChartLastRequest()
                        }
                        
                    }
                    else {
                        if(command === "getAllSybmols"){
                            setReturnData(response.returnData)          
                        }
                        if(command === "getCandles"){
                            setReturnData(response.returnData)
                        }
                    }   
                } else {
                    console.log('Error: ' + response.errorDescr)
                }

            }  catch (Exception) {
                console.log(`:(  ${Exception}`)
            }
        };
        ws.current.onclose = () => {
            console.log('Connection closed');
        };

        ws.current.onerror = () => {
            console.log("WS Error");
        };
        return () => {
            ws.current.close();
          };
    },[])
    return [returnData];
}

export {
    useWebSocket
};


    // const streamProfits = () => {
    //     setMsg({
    //         command: "getProfits",
    //         streamSessionId: streamId
    //     })
    // }

    // const streamTrades = () => {
    //     setMsg({
    //         command: "getTrades",
    //         streamSessionId: streamId
    //     })
    // }
    // const streamTradeStatus = () => {
    //     setMsg({
    //         command: "getTradeStatus",
    //         streamSessionId: streamId
    //     })
    // }
    
//     const startTradeTransaction = () => {
//         setMsg({
//             command: "tradeTransaction",
//             arguments: {
//                 tradeTransInfo: {
// // BUY	0	buy
// // SELL	1	sell
// // BUY_LIMIT	2	buy limit
// // SELL_LIMIT	3	sell limit
// // BUY_STOP	4	buy stop
// // SELL_STOP	5	sell stop
// // BALANCE	6	Read only. Used in getTradesHistory for manager's deposit/withdrawal operations (profit>0 for deposit, profit<0 for withdrawal).
// // CREDIT	7	Read only
//                     "cmd": 2,
// // OPEN	0	order open, used for opening orders
// // PENDING	1	order pending, only used in the streaming getTrades command
// // CLOSE	2	order close
// // MODIFY	3	order modify, only used in the tradeTransaction command
// // DELETE	4	order delete, only used in the tradeTransaction command
//                     "type": 0,
//                     // "offset": 0,
//                     "symbol": "EURUSD",
//                     "expiration": 1462006335000,
//                     "price": 1.12,
//                     "sl": 0.0,
//                     "tp": 0.0,
//                     "volume": 5.0
//                 }
//             }
//         })
//     }
    // console.log(command)
    // useEffect(() => {
    //   
    // }, [msg]
