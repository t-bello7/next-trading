import { comma } from 'postcss/lib/list';
import { useState, useEffect, useRef } from 'react';

const useWebSocket = (command : string, args={}) => {
    const [returnData, setReturnData] = useState<any>()
    const [streamId, setStreamId] = useState<any>()
    const ws = useRef<WebSocket | null>(null);
    // const [data, setData] = useState<any>()

    useEffect(() => {
        ws.current = new WebSocket(`${process.env.NEXT_PUBLIC_XTB_URL}`);
        const subscribe = (subscribeData: any) => {
            try {
                ws.current!.send(JSON.stringify(subscribeData))
            } catch (Exception) {
                console.log(Exception)
            }
        }
        const getMarginLevel = () => {
            subscribe({
                command: "getMarginLevel"
            })
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
            subscribe({
                command: "login",
                arguments: {
                    userId: process.env.NEXT_PUBLIC_XTB_USERID,
                    password: process.env.NEXT_PUBLIC_XTB_PASSWORD
                }
            })
        }
        ws.current.onopen = () => {
            login();
        }
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
                        }
                        if(command === "getMarginLevel") {
                            getMarginLevel()
                        }
                        //  else {
                        //     setStreamId(response.streamSessionId)
                        // }
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
                        if (command === "getMarginLevel"){
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
        // ws.current.onclose = () => {
        //     console.log('Connection closed');
        // };
        ws.current.onerror = (err) => {
            console.log("WS Error", err);
        };   
        // return () => {
        //     ws.current!.close()
        // };
    },[streamId])
    return {
        returnData: returnData,
        // streamId: streamId
    };
}

export {
    useWebSocket
};

