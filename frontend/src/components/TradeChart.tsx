import React, { useEffect, useRef } from 'react';
import { useWebSocketContext } from '@/hooks/state';
import Datafeed  from '@/components/datafeed'
let tvScriptLoadingPromise: Promise<any>;

declare global {
  interface Window {
    TradingView: any; // Replace 'any' with the actual type if you know it
  }
}

export default function TradeChart({width, height}: any) {
  const { symbol } = useWebSocketContext()
  const onLoadScriptRef = useRef<null | (() => void)>();
  useEffect(
    () => { 
      
      onLoadScriptRef.current = createWidget

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

      // return () => onLoadScriptRef.current = null;
      function createWidget() {
        if ( document.getElementById('tradingview_ff1d7') && 'TradingView' in window) {      
          new window.TradingView.widget({
            autosize: true,
            // datafeedUrl: 'https://demo_feed.tradingview.com',
            datafeed: Datafeed,
            allow_symbol_change: true,
            symbol: symbol,
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
    }, [symbol]
  );
  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_ff1d7' className={`h-[40vh] md:h-[50vh]`} />
    </div>
  );
}
