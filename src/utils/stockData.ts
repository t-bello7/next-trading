import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse: (dateString: string) => Date | null) {
	return function(d: any) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;
		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, parseData(parseDate)))
	return promiseMSFT;
}


// {
// 	"ask": 4000.0,
// 	"bid": 4000.0,
// 	"categoryName": "Forex",
// 	"contractSize": 100000,
// 	"currency": "USD",
// 	"currencyPair": true,
// 	"currencyProfit": "SEK",
// 	"description": "USD/PLN",
// 	"expiration": null,
// 	"groupName": "Minor",
// 	"high": 4000.0,
// 	"initialMargin": 0,
// 	"instantMaxVolume": 0,
// 	"leverage": 1.5,
// 	"longOnly": false,
// 	"lotMax": 10.0,
// 	"lotMin": 0.1,
// 	"lotStep": 0.1,
// 	"low": 3500.0,
// 	"marginHedged": 0,
// 	"marginHedgedStrong": false,
// 	"marginMaintenance": null,
// 	"marginMode": 101,
// 	"percentage": 100.0,
// 	"precision": 2,
// 	"profitMode": 5,
// 	"quoteId": 1,
// 	"shortSelling": true,
// 	"spreadRaw": 0.000003,
// 	"spreadTable": 0.00042,
// 	"starting": null,
// 	"stepRuleId": 1,
// 	"stopsLevel": 0,
// 	"swap_rollover3days": 0,
// 	"swapEnable": true,
// 	"swapLong": -2.55929,
// 	"swapShort": 0.131,
// 	"swapType": 0,
// 	"symbol": "USDPLN",
// 	"tickSize": 1.0,
// 	"tickValue": 1.0,
// 	"time": 1272446136891,
// 	"timeString": "Thu May 23 12:23:44 EDT 2013",
// 	"trailingEnabled": true,
// 	"type": 21
// }
// http://developers.xstore.pro/api/tutorials/first_web_app


export const assetData = [
	{
		id: "3swss",
		name: "stocks",
		nameAbre: "stc",
		data: [
			{
				id: "232e",
				type: "Stocks CFD",
				data: [
					{
						id: "2edf2",
						name: "Belgium",
						data: [
							{
								id: 'feww',
								symbol: "Solvay",
								change: "1.30%",
								bid: 70.29,
								ask: 70.62
							},
							{
								id: 'f#2c',
								symbol: "KBC",
								change: "1.30%",
								bid: 70.29,
								ask: 70.62
							}
						]
					}
				]
			}
		]
	},
	{
		id: "3d2d",
		name: "commodites",
		nameAbre: "cmd",
		data: [
			{
				id: "agr101",
				name: "agriculture",
				data: [
					{
						id: "ctn101",
						symbol: "cotton",
						change: "0.98",
						bid: 85.13,
						ask: 85.12 
					},
					{
						id: "coc101",
						symbol: "cocoa",
						change: "-0.25",
						bid: 61.89,
						ask: 50.00
					}
				]
			},
			{
				id: "eng101",
				name: "energy",
				data: [
					{
						id: "oliwit121",
						symbol: "oli.with",
						change: "0.03",
						bid: 79.80,
						ask: 93.00
					},
					{
						id: "oil101",
						symbol: "oil",
						change: "0.11",
						bid: 86.53,
						ask: 83.43
					}
				]
			}
		]
	},
	{
		id: "fx101",
		name: "forex",
		nameAbre: "fx",
		data: [
			{
				id: "mj101",
				name: "major",
				data: [
					{
						id: "uchf101",
						symbol: "usdchf",
						change: "0.11",
						bid: 86.53,
						ask: 83.43
					},
					{
						id: "euch101",
						symbol: "eurchf",
						change: "0.34",
						bid: 0.7824,
						ask: 0.8656
					}
				]
			}, 
			{
				id: "mn101",
				name: "minor",
				data: [
					{
						id: "gbca101",
						symbol: "GBPCAD",
						change: "0.66",
						bid: 1.7043,
						ask: 1.7034
					},
					{
						id: "cadjp101",
						symbol: "CADJPY",
						change: "0.57",
						bid: 106.007,
						ask: 106.74
					}
				]
			}, 
		]
	},
	{
		id: "cryp101",
		name: "crypto",
		nameAbre: "crt",
		data: [
			{
				id: "ripple101",
				symbol: "ripple",
				change: "0.10",
				bid: 0.7118,
				ask: 0.7166
			},
			{
				id: "litecoin101",
				symbol: "litecoin",
				change: "1.41",
				bid: 91.125,
				ask: 91.124
			}
		]
	},
	{
		id: "ind101",
		name: "indices",
		nameAbre: "ind",
		data: [
			{
				id: "amr101",
				name: "Americas",
				data: [
					{
						id: "mexco101",
						symbol: "mexcomp",
						change: "0.00",
						bid: 54445,
						ask: 55674
					},
					{
						id: "vix101",
						symbol: "vix",
						change: "1.38",
						bid: 1884,
						ask: 154
					}
				]
			}, 
			{
				id: "asia-pa101",
				name: "asia-pacific",
				data: [
					{
						id: "hkcomp101",
						symbol: "hkcomp",
						change: "4.20",
						bid: 202144,
						ask: 20174
					},
					{
						id: "viet101",
						symbol: "viet30",
						change: "0.70",
						bid: 2021,
						ask: 2011
					}
				]
			}, 
		]

	}
]