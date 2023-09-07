import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { createChart, ColorType } from 'lightweight-charts';
import { useWebSocket } from '@/hooks/useWebSocket';
import { useWebSocketContext } from '@/hooks/state';
import moment from 'moment';

const LightChart = (props: any) => {
    const chartRef = useRef< HTMLDivElement >(null)
    const { symbol } = useWebSocketContext();
    const { theme } = useTheme()
    const args =  {
        "info": {
            "period": 1440,
            "start": 9000,
            "symbol": symbol
        }
    }
    // const args = {
    //     symbol: symbol
    // }
    const { returnData } = useWebSocket('getCandles', args)
    // const initialData = [
    //     { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    //     { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    //     { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    //     { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    //     { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    //     { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    //     { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    //     { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    //     { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    //     { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
    //   ];
  
    const {
        width, height,
		colors: {
			backgroundColor = theme !== 'dark' ?'white' : 'black',
			lineColor = '#2962FF',
			textColor = theme !== 'dark' ? 'black' : 'white',
			areaTopColor = '#2962FF',
            upColor = '#26a69a',
            downColor = '#ef5350',
            borderVisible = false,
            wickUpColor = '#26a69a',
            wickDownColor = '#ef5350',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {},
	} = props;
    useEffect(() => {
    
        const chart = createChart(chartRef.current!, {
            timeScale: {
                timeVisible: true
            },
            localization: {
                timeFormatter: (timestamp: any) => {
                 return new Date(timestamp * 1000).toLocaleString('en-GB');
                }
            },
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: width,
            height: height,
        });
        chart.timeScale().fitContent();
        const candlestickSeries = chart.addCandlestickSeries({upColor, downColor, borderVisible, wickUpColor, wickDownColor});
        if (returnData){
            // const initialData = returnData.rateInfos.map((item:any) => ({...item, time:  moment(item.ctmString).utc().valueOf()})).slice(0, 10);
            // const initialData = returnData.rateInfos.map((item:any) => ({...item, time: item.ctm}));
            const initialData = returnData.rateInfos.map((item:any) => ({
                // ctm: item.ctm,
                // time:  moment(item.ctm).format("YYYY-MM-DD"),
                time: item.ctm,
                ctmst: moment(item.ctmString).unix(),
                open: item.open * 0.0001,
                close: item.close * 0.0001,
                low: item.high * 0.0001,
                high: item.high * 0.0001
            })).slice(60, 70);
            candlestickSeries.setData(initialData);
        }
        return () => {
            chart.remove();
        };
    }, [ returnData, width, height, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);
    if (returnData === undefined) return <div ref={chartRef}> loading </div>

    return (
        <div ref={chartRef}>

        </div>
    )
}

export default LightChart;