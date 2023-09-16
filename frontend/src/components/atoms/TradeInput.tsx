import { InputNumber } from "antd";
const TradeInput = ({handleTrade}: any) => {
    return <InputNumber defaultValue={10} onChange={(value: number |null ) => handleTrade({volume: value})} step={5}/>
}

export default TradeInput;