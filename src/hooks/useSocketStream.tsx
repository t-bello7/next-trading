import { useState, useEffect, useRef } from 'react';
import { useWebSocket } from './useWebSocket';

const useSocketStream = (command : string, args={symbol: 'EURUSD'}) => {
    const streamws = useRef<WebSocket | null>(null);
    const { streamId } = useWebSocket('login')
    const [data, setData] = useState<any>()

    useEffect(() => {
        streamws.current = new WebSocket(`${process.env.NEXT_PUBLIC_XTB_URL_STREAM}`);
        if(streamId){
            const subscribeStream = (subscribeData: any) => {
                try {
                    if(streamws.current){
                        streamws.current.send(JSON.stringify(subscribeData))
                    }
                } catch (Exception) {
                    console.error(Exception)
                }
            }

            const streamBalance = (streamId: string) => {
                subscribeStream({
                    command: "getBalance",
                    streamSessionId: streamId
                })
            }
            const streamTrades = (streamId: string) => {
                subscribeStream({
                    command: "getTrades",
                    streamSessionId: streamId
                })
            }

            const streamCandles = (streamId: string, symbol: string) => {
                console.log(symbol)
                console.log(streamId)
                subscribeStream({
                    command: "getCandles",
                    streamSessionId: streamId,
                    symbol: symbol
                })
            }
            streamws.current.onopen = () => {
                if (command === 'streamBalance'){
                    streamBalance(streamId)
                }
                if (command === 'streamTrades') {
                    streamTrades(streamId)
                }
                if (command === 'streamCandles') {
                    streamCandles(streamId, args.symbol)
                }
            }
            streamws.current.onmessage = (event: any) => {
            let response = JSON.parse(event.data);
                if (command === 'streamBalance') {
                    setData(response.data)
                }
                if (command === 'streamTrades') {
                    setData(response)
                }
                if (command === 'streamCandles') {
                    setData(response);
                }
            }  
            streamws.current.onclose = () => {
                console.log('Connection closed');
            };    
            streamws.current.onerror = (e:any) => {
                console.log(e)
                console.log("WS Error");
            }; 
        }
            
    //   return () => {
    //     streamws.current.close();
    //   };
      }, [streamId])

      return {
        data: data
      }
}
// useEffect(() => {
//     streamws.current = new WebSocket(`${process.env.NEXT_PUBLIC_XTB_URL_STREAM}`);
//     const subscribeStream = (subscribeData: any) => {
//         try {
//             streamws.current.send(JSON.stringify(subscribeData))
//         } catch (Exception) {
//             console.error(Exception)
//         }
//     }
//     // const streamCandles = (streamId: string) => {
//     //     subscribeStream({
//     //         command: "getCandles",
//     //         streamSessionId: streamId
//     //     })
//     // }
//     const streamBalance = (streamId: string) => {
//         console.log(streamId)
//         subscribeStream({
//             command: "getBalance",
//             streamSessionId: streamId
//         })
//     }
//     streamws.current.onopen = () => {
//         streamBalance(streamId)
//     }
//     streamws.current.onmessage = (event) => {
//         let response = JSON.parse(event.data);
//         console.log(response);
//     }  
//     streamws.current.onclose = () => {
//         console.log('Connection closed');
//     };

//     streamws.current.onerror = () => {
//         console.log("WS Error");
//     };

// }, [streamId])

export { useSocketStream}