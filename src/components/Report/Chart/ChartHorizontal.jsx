import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './Chart.module.scss';

export const ChartHorizontal = ({ activeCategory }) => {
  const categoriesArray = activeCategory.subCategories;
  const categoriesName = categoriesArray.map(item => item.name);
  const categoriesValue = categoriesArray.map(item => item.value);

  const data = {
    labels: categoriesName,
    datasets: [
      {
        data: categoriesValue,
        backgroundColor: [
          'rgba(255, 117, 29, 0.8)',
          'rgba(255, 218, 192, 0.8)',
          'rgba(255, 218, 192, 0.8)',
        ],
        borderRadius: 5,
        datalabels: {
          anchor: 'end',
          align: 'right',
          offset: 5,
          display: true,
          font: {
            size: 10,
          },
        },
      },
    ],
  };
  return (
    <div className={s.chart}>
      <Bar
        data={data}
        width={480}
        plugins={[ChartDataLabels]}
        options={{
          plugins: {
            datalabels: {
              display: true,
              formatter: value => {
                return value + ' грн.';
              },
            },
            legend: false,
          },
          indexAxis: 'y',
          maintainAspectRatio: false,
          responsive: false,
          barThickness: 15,
          layout: {
            padding: {
              right: 20,
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,
              },
              grid: {
                drawTicks: false,
                display: false,
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                mirror: true,
                labelOffset: -20,
                font: {
                  size: 10,
                },
              },
              grid: {
                display: false,
                drawTicks: false,
                drawBorder: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

ChartHorizontal.propTypes = {
  activeCategory: PropTypes.object.isRequired,
};
