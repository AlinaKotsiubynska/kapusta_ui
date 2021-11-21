import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './Chart.module.scss';

export const ChartVertical = ({ activeCategory }) => {
  const categoriesArray = activeCategory.subCategories;
  const categoriesName = categoriesArray.map(item => item.name);
  const categoriesValue = categoriesArray.map(item => item.value);

  const data = {
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
          font: {
            size: 12
          },
        },
      },
    ],
  };
  return (
    <div className={s.chart}>
      <Bar
        data={data}
        width={758}
        height={400}
        plugins={[ChartDataLabels]}
        options={{
          maintainAspectRatio: false,
          responsive: false,
          barThickness: 38,
          layout: {
            padding: {
              top: 20,
            },
          },
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
            datalabels: {
              display: true,
              formatter: (value) => {
                return value + ' грн.';
              }
            },
            legend: false,
          },
        }}
      />
 </div>
  );
};

ChartVertical.propTypes = {
  activeCategory: PropTypes.object.isRequired
};