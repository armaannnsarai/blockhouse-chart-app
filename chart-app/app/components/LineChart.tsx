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

//registering chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

//chart config
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
  //x and y axis styling
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

//graph component
export function LineGraph() {
  //wait until component is mounted
  const [data, setData] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        //fetch data from api
        const res = await fetch("http://localhost:8000/api/line-chart-data");
        const json = await res.json();
        setData(json);
      } catch (e) {
        //handle error
        alert("We couldn't fetch your data! Make sure the backend is running.");
      }
    })();
  }, []);
  //in case data didnt load, display loading
  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    //render chart
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
