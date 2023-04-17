import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'ABC Logistics',
    'Bestway Freight',
    'Transit Group',
    'J&R Logistics',
    'Xpress Transport',
    'Others',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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
      text: 'Favorite Brokers',
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

export default function Doughnutchart() {
  return <Doughnut options={options} data={data} />;
}
