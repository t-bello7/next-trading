import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { createChart, ColorType } from 'lightweight-charts';
const LightChart = (props) => {
    const { theme } = useTheme()
    const {
        width, height,
		data,
		colors: {
			backgroundColor = theme !== 'dark' ?'white' : 'black',
			lineColor = '#2962FF',
			textColor = theme !== 'dark' ? 'black' : 'white',
			areaTopColor = '#2962FF',
            padding='20px',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {},
	} = props;

    const chartRef = useRef()
    useEffect(() => {
        const chart = createChart(chartRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: width,
            height: height,
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
        newSeries.setData(data);

        return () => {
            chart.remove();
        };
    }, [data, width, height, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);
    return (
        <div ref={chartRef}>

        </div>
    )
}

export default LightChart;