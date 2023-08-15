export type storeType = {
    [key: string]: string
}

export interface PendingOrderDataType {
    key: string;
    order: string;
    type: string;
    volume: number;
    order_price: number;
    sl: number;
    tp: number;
    market_price: number;
    expiration: number;
}


export interface OpenPositionDataType {
    key: string;
    position: string;
    type: number;
    volume: number;
    market_volume: number;
    sl: number;
    tp: number;
    open_price: number;
    market_price: number;
    gross_profit: number;
    net_profit: number;
    rollover: number;
}

export interface OpenPositionFixedDataType {
    key: React.Key;
    position: string;
    type: string;
    volume: string;
    market_volume: string;
    sl: string;
    tp: string;
    open_price: string;
    market_price: string;
    gross_profit: string;
    netProfit: string;
    rollover: string;
    operation: React.ReactElement;
}


export interface AssetContextType {
    currentAsset: string | null;
}