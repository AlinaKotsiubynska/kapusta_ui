import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import css from './Chart.module.css';

export const Chart = ({ activeCategory }) => {
  const categoriesArray = activeCategory.subCategories;
  const categoriesName = categoriesArray.map(item => item.name);
  const categoriesValue = categoriesArray.map(item => item.value);
  // const categoriesLabels = categoriesArray.map(item => `${item.value} грн.`);

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
          offset: 13,
          // display: true,
          font: {
            size: 10
          },
          formatter: function(value, context) {
          return context.chart.data.categoriesLabels[context.dataIndex];
        }
        },
      },
    ],
  };
  return (
    < div className={css.chart}>
      <Bar
        data={data}
        width={480}
        plugins={[ChartDataLabels]}
        options={{
          indexAxis: 'y',
          maintainAspectRatio: false,
          responsive: false,
          barThickness: 15,
          layout: {
            padding: {
              right: 20
            }
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
                  size: 10
                }
              },
              grid: {
               display: false,
               drawTicks: false,
               drawBorder: false,
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

{/* <Bar
        data={data}
        width={758}
        height={400}
        plugins={[ChartDataLabels]}
        options={{
          // indexAxis: 'y',
          maintainAspectRatio: false,
          responsive: false,
          barThickness: 38,
          layout: {
            padding: {
              top: 20
            }
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
            legend: false,
          },
        }}
      /> */}
