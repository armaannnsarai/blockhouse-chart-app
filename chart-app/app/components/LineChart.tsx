"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: (context: { label: any; raw: any }) => {
          return `${context.label}: ${context.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
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
};

export function LineGraph() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/api/line-chart-data");
        const json = await res.json();
        setData(json);
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
        <Line
          data={{
            labels: data["x"],
            datasets: [
              {
                label: "Data",
                data: data["y"],
                fill: false,
                borderColor: "hsl(var(--primary))",
                pointBackgroundColor: "hsl(var(--primary))",
                tension: 0.1,
              },
            ],
          }}
          options={options}
        />
      </div>
    );
  }
}
