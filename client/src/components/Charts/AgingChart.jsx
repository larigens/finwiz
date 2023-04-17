import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#e7f0f4',
      },
    },
    title: {
      display: true,
      text: 'AGING',
      color: '#F2F3F5',
      font: {
        size: 25,
        color: '#e7f0f4',
      },
    },
    tooltip: {
      bodyColor: '#e7f0f4', // set the tooltip body color to white
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#e7f0f4', // set x-axis label color to white
        size: 14,
        maxRotation: 0, // set to 0 to rotate x-axis labels if they overlap
        autoSkip: true, // set to true to automatically skip labels if there are too many
      },
    },
    y: {
      ticks: {
        color: '#e7f0f4', // set y-axis label color to white
        size: 14,
        maxRotation: 0, // set to 0 to rotate x-axis labels if they overlap
        autoSkip: true, // set to true to automatically skip labels if there are too many
      },
    },
  },
};

const labels = [
  '15 or less',
  '16 to 30',
  '31 to 45',
  '46 to 60',
  '61 to 75',
  'over 75',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Current Aging',
      data: [2000, 5000, 10000, 900, 600, 1400, 1700],
      backgroundColor: '#6f92fc',
    },
  ],
};

export function AgingChart() {
  return <Bar options={options} data={data} />;
}
