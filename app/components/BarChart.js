import React, { useEffect, useRef } from "react";

import Chart from "chart.js/auto";

const BarChart = ({ data, label, bottomLabel, backGroundColor }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Ensure the chart is only created once
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new Chart instance
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [bottomLabel],
          datasets: [
            {
              label: label,
              data: [data],
              backgroundColor: [backGroundColor],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default BarChart;
