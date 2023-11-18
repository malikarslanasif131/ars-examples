// ExternalLibraries.js
import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

const ExternalLibraries = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Register the necessary components for the "bar" chart
    Chart.register(BarController, BarElement, LinearScale, CategoryScale);

    // Initialize the Chart.js chart when the component mounts
    const ctx = chartContainer.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      chartInstance.current.destroy();
      console.log("Chart instance is destroyed on unmount");
    };
  }, []);

  return (
    <div>
      <h2>Use Case 6: Using useRef with External Libraries or APIs</h2>
      <canvas ref={chartContainer} width="400" height="300"></canvas>
    </div>
  );
};

export default ExternalLibraries;
