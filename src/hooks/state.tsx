import { createContext, useContext, useReducer } from "react";
import { AssetContextType } from "../utils/type";

export const initialState = {
    symbol: 'EURUSD'
}
export const reducer = (state: any, action: any) => {
    const { type, payload } = action
    switch(type) {
        case 'CHANGE_SYMBOL':
            return {...state, symbol: payload.symbol}
        default:
            throw new Error(`No case for ${type} in Reducer.`)
    }
}

const WebSocketContext = createContext(initialState);

const WebSocketContextProvider = ({ children } : any) => {
    const [state , dispatch] = useReducer(reducer, initialState)

    const changeSymbol = (symbol: string) => {
        const action = {
          type: 'CHANGE_SYMBOL',
          payload: {
            symbol : symbol
          }
        }
        dispatch(action);
      }
      // export const WebSocketContext = createContext<AssetContextType | null>({
//   currentSymbol: '',
//   setCurrentSymbol: () => {}
// });


      // const [currentSymbol, setCurrentSymbol] = useState<AssetContextType>({
  //   currentSymbol: 'EURUSD'
  // });
  // const value = { currentSymbol, setCurrentSymbol}
  // const value = useMemo(
  //   () => ({ currentSymbol, setCurrentSymbol}),
  //   [currentSymbol] 
  // )
      const value = {
        symbol: state.symbol,
        changeSymbol
      }
      return (
        <WebSocketContext.Provider value={value}>
            {children} 
        </WebSocketContext.Provider>
        )
}

const useWebSocketContext = () => {
  const context = useContext(WebSocketContext)
  if (context === undefined) {
    throw new Error("useWebSocketContext must be used within ShopContext")
  }
  return context
}

export { WebSocketContextProvider, WebSocketContext, useWebSocketContext }