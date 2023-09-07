// TradeChart.jsx

import React, { useEffect, useRef } from 'react';
import { useWebSocketContext } from '@/hooks/state';
import Datafeed  from '@/components/datafeed'
let tvScriptLoadingPromise: Promise<any>;


export default function TradeChart({width, height}: any) {
  const onLoadScriptRef = useRef();
    const { symbol } = useWebSocketContext()
    console.log(symbol)
    const data=  [
        {
            time:1508313600000,
            close:42.1,
            open:41.0,
            high:43.0,
            low:40.4,
            volume:12000
        }, {
            time:1508317200000,
            close:43.4,
            open:42.9,
            high:44.1,
            low:42.1,
            volume:18500
        }, {
            time:1508320800000,
            close:44.3,
            open:43.7,
            high:44.8,
            low:42.8,
            volume:24000
        }, {
            time:1508324400000,
            close:42.8,
            open:44.5,
            high:44.5,
            low:42.3,
            volume:45000
        }
    ]
  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_ff1d7') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            // datafeedUrl: 'https://demo_feed.tradingview.com',
            datafeed: Datafeed,
            allow_symbol_change: true,
            symbol: "AAPL",
            timezone: "Etc/UTC",
            libraryPath: '/charting_library/',
            theme: "light",
            style: "1",
            locale: "en",
            enable_publishing: false,
            hide_top_toolbar: true,
            hide_legend: true,
            has_intraday: true,
            range: "YTD",
            save_image: false,
            hide_volume: true,
            container_id: "tradingview_ff1d7"
          });
        }
      }
    },
    []
  );
  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_ff1d7' className={`h-[40vh] md:h-[50vh]`} />
    </div>
  );
}
