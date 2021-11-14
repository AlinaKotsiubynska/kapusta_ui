// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import css from './Chart.module.css';

export const Chart = ({ activeCategory }) => {
  const categoriesArray = activeCategory.subCategories;
  const categoriesName = categoriesArray.map(item => item.name);
  const categoriesValue = categoriesArray.map(item => item.value);
  const data = {
    // labels: ["Кино", "Ресторан", "Театр"],
    labels: categoriesName,
    datasets: [
      {
        label: 'Expenses',
        data: categoriesValue,
        backgroundColor: [
          'rgba(255, 117, 29, 0.8)',
          'rgba(255, 218, 192, 0.8)',
          'rgba(255, 218, 192, 0.8)',
        ],
        borderRadius: 5,
        datalabels: {
          anchor: 'end',
          align: 'top',
        },
      },
    ],
  };
  return (
    <div className={css.chart}>
      <Bar
        data={data}
        width={758}
        //height={400}
        plugins={[ChartDataLabels]}
        options={{
          maintainAspectRatio: false,
          responsive: false,
          barThickness: 38,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                drawTicks: false,
              },
            },
          },
          plugins: {
            legend: false,
          },
        }}
      />
    </div>
  );
};