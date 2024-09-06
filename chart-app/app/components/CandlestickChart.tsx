"use client";
import React from "react";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TimeScale,
} from "chart.js";
import {
  CandlestickController,
  CandlestickElement,
  OhlcElement,
  OhlcController,
} from "chartjs-chart-financial";
import { Chart } from "react-chartjs-2";
import "chartjs-chart-financial";
import { useState, useEffect } from "react";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TimeScale,
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement
);

export function CandlestickChart() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/candlestick-chart-data"
        );
        const json = await res.json();
        let y = json["y"];
        for (let i = 0; i < y.length; i++) {
          y[i].x = new Date(y[i].x);
        }
        setData({ x: json["x"], y: y } as any);
      } catch (e) {
        alert("We couldn't fetch your data! Make sure the backend is running.");
      }
    })();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div style={{ width: "100%", minHeight: "300px", maxHeight: "500px" }}>
        <Chart
          type="candlestick"
          data={{
            datasets: [
              {
                label: data["x"],
                data: data["y"],
                borderColor: "hsl(var(--primary))",
                borderWidth: 1,
                // color: {
                //   up: "green",
                //   down: "red",
                // },
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context: { raw: any }) => {
                    const { raw } = context;
                    return `Open: ${raw.o}, High: ${raw.h}, Low: ${raw.l}, Close: ${raw.c}`;
                  },
                },
              },
            },
            scales: {
              x: {
                type: "time",
                time: {
                  unit: "day",
                },
                grid: {
                  color: "hsl(var(--primary))",
                },
                ticks: {
                  color: "hsl(var(--primary))",
                },
              },
              y: {
                grid: {
                  color: "hsl(var(--primary))",
                },
                ticks: {
                  color: "hsl(var(--primary))",
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
