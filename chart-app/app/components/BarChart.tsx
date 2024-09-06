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

//registering chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
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
export function BarGraph() {
  const [data, setData] = useState(undefined);
  //wait until component is mounted
  useEffect(() => {
    (async () => {
      try {
        //fetch data from api
        const res = await fetch("http://localhost:8000/api/bar-chart-data");
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
