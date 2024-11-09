import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the components of Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, cloumn }) => {
  const label = { sum: 'Quantity', quantity: '' };
  const chartData = {
    labels: data.map((item) => item.item_name),
    datasets: [
      {
        label: 'Quantity',
        data: data.map((item) => item.quantity),
        backgroundColor: '#0050b3',
        borderRadius: 1,
        barThickness: 20,
        bar: {
          barPercentage: 0.5, // Controls the width of the bars (0.5 = 50% of the available space)
          categoryPercentage: 0.1, // Controls the space between bars (1 = no space, <1 = more space)
        },
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'Best Selling Items Quantity',
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Quantity: ${tooltipItem.raw.toLocaleString()}`; // Formatting tooltip to display currency
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value.toLocaleString()}`, // Format ticks as currency
        },
      },
    },
    // Add the height option to set the height of the chart
    height: 100, // Adjust the height as needed
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
