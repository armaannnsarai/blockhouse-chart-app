"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { useState, useEffect } from "react";

//registering chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

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
};

//graph component
export function PieGraph() {
  const [data, setData] = useState(undefined);
  //wait until component is mounted
  useEffect(() => {
    (async () => {
      try {
        //fetch data from api
        const res = await fetch("http://localhost:8000/api/pie-chart-data");
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "300px",
          maxHeight: "500px",
        }}
      >
        <Pie
          data={{
            labels: data["x"],
            datasets: [
              {
                data: data["y"],
                backgroundColor: ["#ff0000", "#0000ff", "#ffff00"],
                borderColor: ["#ffffff"],
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
