"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
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

export function BarGraph() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/api/bar-chart-data");
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
      <div style={{ width: "100%", minHeight: "300px" }}>
        <Bar
          data={{
            labels: data["x"],
            datasets: [
              {
                label: data["y"],
                data: [100, 150, 200],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={options}
        />
      </div>
    );
  }
}
