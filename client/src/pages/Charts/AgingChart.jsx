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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Accounts Receivable Overview',
      font: {
        size: 28
      }
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Paid',
      data: [800, 1200, 1500, 900, 600, 1400, 1700],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Short-Payments',
      data: [50, 150, 100, 20, 0, 15, 60],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function AgingChart() {
  return <Bar options={options} data={data} />;
}
