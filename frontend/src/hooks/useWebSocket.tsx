import { comma } from 'postcss/lib/list';
import { useState, useEffect, useRef } from 'react';

// const parseGetAllSymbols = (returnData: any) => (
//     returnData.map((item: any) => ({
//             symbol: item.symbol,
//             ask: item.ask,
//             bid: item.bid,
//             descr: item.description
//         }
//     ))
//   )

const useWebSocket = (command : string, args={}) => {
    const [returnData, setReturnData] = useState<any>()
    const [streamId, setStreamId] = useState<any>()
    const ws = useRef<WebSocket | null>(null);
    const streamws = useRef<WebSocket | null>(null);
    const [data, setData] = useState<any>()

    useEffect(() => {
        // streamws.current = new WebSocket(`${process.env.NEXT_PUBLIC_XTB_URL_STREAM}`);
        ws.current = new WebSocket(`${process.env.NEXT_PUBLIC_XTB_URL}`);
        const subscribeStream = (subscribeData: any) => {
            console.log(subscribeData)
            try {
                if(streamws.current){
                    streamws.current.send(JSON.stringify(subscribeData))
                }
            } catch (Exception) {
                console.error(Exception)
            }
        }
        const subscribe = (subscribeData: any) => {
            try {
                ws.current!.send(JSON.stringify(subscribeData))
            } catch (Exception) {
                console.error(Exception)
            }
        }
        const getAllSymbols = () => {
            subscribe({
                command: "getAllSymbols"
            })
        }
        const getChartLastRequest = () => {
            subscribe({
                command: "getChartLastRequest",
                arguments: args
            })
        }
        const getTrades = () => {
            subscribe({
                command: "getTrades",
                arguments: args
            })
        }
        const performTrade = () => {
            subscribe({
                command: "tradeTransaction3",
                arguments: {
                    "tradeTransInfo": {
                        "cmd": 2,
                        "customComment": "Some text",
                        "expiration": 1462006335000,
                        "offset": 0,
                        "order": 82188055,
                        "price": 1.12,
                        "sl": 0.0,
                        "symbol": "EURUSD",
                        "tp": 0.0,
                        "type": 0,
                        "volume": 5.0
                    }
                }
            })
        }
        const getTradeTransaction = () => {
            subscribe({
                command: "",
                arguments: {
                    order: 43
                }
            })
        }
        const login = () => {
            // console.log(process.env.NEXT_PUBLIC_XTB_USERID)
            subscribe({
                command: "login",
                arguments: {
                    userId: process.env.NEXT_PUBLIC_XTB_USERID,
                    password: process.env.NEXT_PUBLIC_XTB_PASSWORD
                }
            })
        }
        const streamCandles = (streamId: string, symbol: string) => {
            console.log(symbol)
            console.log(streamId)
            subscribeStream({
                command: "getTrades",
                streamSessionId: `${streamId}`,
                // symbol: symbol
            })
        }
        const streamBalance = (streamId: string) => {
            console.log(streamId);

            subscribeStream({
                command: "getBalance",
                streamSessionId: streamId
            })
        }
        
        ws.current.onopen = () => {
            login();
        }
        // streamws.current.addEventListener('open', () => {
        //     console.log('WebSocket 2 connected');
        // });

        // streamws.current.onopen = () => {
        //     if(streamId) {
        //         if (command === 'streamBalance'){
        //             streamBalance(streamId)
        //         }
        //         if (command === 'streamCandles') {                   
        //             streamCandles(streamId, "GOLD")
        //         }
        //     }   
        // }
        // streamws.current.onmessage = (event: any) => {
        //     let response = JSON.parse(event.data);
        //     console.log(response)
        //     if (response.data) {
        //         if (command === 'streamBalance') {
        //             setData(response.data)
        //         }
        //         if (command === 'streamCandles') {
        //             console.log(response)
        //             setData(response);
        //         }
        //     }

        // }
        ws.current.onmessage = (event: any) => {
            try {
                let response = JSON.parse(event.data);
                if (response.status == true) {
                    if (response.streamSessionId  !== undefined) {
                        if(command === "getTradeTransaction"){
                            getTradeTransaction()
                        }
                        if(command === "getAllSybmols"){
                            getAllSymbols()                                
                        }
                        if(command === "getCandles") {
                            getChartLastRequest()
                        }
                        if (command === "performTrade") {
                            performTrade()
                        }
                        if(command === "getTrades") {
                            getTrades()
                        } else {
                            setStreamId(response.streamSessionId)
                        }
                    }
                    else {
                        if (command == "getTradeTransaction") {
                            setReturnData(response.returnData)
                        }
                        if (command === "performTrades") {
                            setReturnData(response.returnData)
                        }
                        if(command === "getAllSybmols"){
                            setReturnData(response.returnData)          
                        }
                        if(command === "getCandles"){
                            setReturnData(response.returnData)
                        }
                        if (command ==="getTrades"){
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
        // streamws.current.onclose = () => {
        //     console.log('stream Connection  closed');
        // };
        // streamws.current.onerror = () => {
        //     console.log('stream ws error');
        // };
        ws.current.onerror = (err) => {
            console.log(err);
            console.log("WS Error");
        };   
        // return () => {
        //     ws.current!.close()
        // };
    },[streamId])
    return {
        returnData: returnData,
        data: data,
        streamId: streamId
    };
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
