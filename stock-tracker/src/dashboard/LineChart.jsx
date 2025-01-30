import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { chartData } from "../mock";

// Static stock data (replace this with your API or dynamic data as needed)
const stockData = {
    "2025-01-20": {
        "1. open": "150.00",
        "2. high": "155.00",
        "3. low": "148.00",
        "4. close": "152.00"
    },
    "2025-01-13": {
        "1. open": "148.00",
        "2. high": "152.00",
        "3. low": "145.00",
        "4. close": "150.00"
    },
    "2025-01-06": {
        "1. open": "145.00",
        "2. high": "150.00",
        "3. low": "140.00",
        "4. close": "148.00"
    }
};

// Format stock data for the candlestick chart
const formatData = (data) => {
    const formattedData = [];
    let count = 0;
    Object.entries(data["Weekly Adjusted Time Series"]).forEach(([date, value]) => {
        if (count == 100) {
            return formattedData; // Stop at 100 items
        }

        formattedData.push({
            x: date, // Use the date as the x-axis label
            y: [
                parseFloat(value["1. open"]),
                parseFloat(value["2. high"]),
                parseFloat(value["3. low"]),
                parseFloat(value["4. close"])
            ]
        });
        count++;
    });
    return formattedData.reverse(); // Reverse to show data in ascending order by date
};

const StockChart = () => {
    // State for chart options and series
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: "candlestick",
            height: 350,
            zoom: {
                enabled: true,
                type: 'x', // Enable zooming horizontally
                autoScaleYaxis: true
            }
        },
        title: {
            text: "Stock Candlestick Chart",
            align: "left"
        },
        xaxis: {
            type: "category",
            position: "bottom",
            labels: {
                formatter: (value) => new Date(value).toLocaleDateString(),
                rotate: 90,
                style: {
                    fontSize: '12px',
                    colors: ['#000'],
                    fontFamily: 'Arial',
                }
            },
            tickAmount: 10,
            axisBorder: {
                show: true,
                color: "#78909c"
            },
            axisTicks: {
                show: true,
                color: "#78909c"
            },
        },
        yaxis: {
            position: 'right',
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: true,
                color: "#78909c"
            },
            axisTicks: {
                show: true,
                color: "#78909c"
            },
        }
    });

    const [chartSeries, setChartSeries] = useState([]);

    useEffect(() => {
        const formattedData = formatData(chartData);
        setChartSeries([{ name: "Stock Price", data: formattedData }]);
    }, []);

    return (
        <div style={{ width: "100%", overflowX: "auto", paddingBottom: "20px" }}>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="candlestick"
                height={350}
                width={1500}
            />
        </div>
    );
};

export default StockChart;
