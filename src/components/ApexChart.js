import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '../contexts/ThemeContext';
import { ReactTyped as Typed } from 'react-typed';
import './ApexChart.css';

const ApexChart = () => {
  const { theme } = useTheme();

  const options = {
    chart: {
      height: 350,
      type: 'rangeBar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: true,
        barHeight: '70%',
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        var a = new Date(val[0]);
        var b = new Date(val[1]);
        var diff = Math.floor((b - a) / (1000 * 60 * 60 * 24));
        return diff + (diff > 1 ? ' days' : ' day');
      },
      style: {
        colors: [theme === 'dark' ? '#fff' : '#000'],
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: [theme === 'dark' ? '#fff' : '#000'],
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [theme === 'dark' ? '#fff' : '#000'],
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
        }
      }
    },
    tooltip: {
      enabled: true,
      theme: theme,
      style: {
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
      },
      x: {
        show: true,
        format: 'dd MMM yyyy',
        formatter: undefined,
      },
      y: {
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
      marker: {
        show: true,
      },
      items: {
        display: 'flex',
      },
    },
    legend: {
      position: 'top',
      labels: {
        colors: [theme === 'dark' ? '#fff' : '#000'],
        fontSize: '12px',
        fontFamily: 'Roboto, sans-serif',
      }
    },
    annotations: {
      xaxis: [
        {
          x: new Date('2022-09-30').getTime(),
          borderColor: '#FF4560',
          label: {
            borderColor: '#FF4560',
            style: {
              color: '#fff',
              background: '#FF4560'
            },
            text: 'SQLD 취득'
          }
        },
        {
          x: new Date('2023-08-19').getTime(),
          borderColor: '#FF4560',
          label: {
            borderColor: '#FF4560',
            style: {
              color: '#fff',
              background: '#FF4560'
            },
            text: 'CSTS FL 취득'
          }
        }
      ]
    }
  };

  const series = [
    {
      name: 'Education',
      data: [
        {
          x: '아주대학교',
          y: [
            new Date('2018-03-01').getTime(),
            new Date('2020-02-17').getTime()
          ]
        },
        {
          x: '중앙대학교',
          y: [
            new Date('2020-03-01').getTime(),
            new Date('2022-02-14').getTime()
          ]
        },
        {
          x: '삼성SDS SCSA 20기',
          y: [
            new Date('2023-01-16').getTime(),
            new Date('2023-07-07').getTime()
          ]
        }
      ]
    },
    {
      name: 'Career',
      data: [
        {
          x: 'ON Semiconductor',
          y: [
            new Date('2021-10-25').getTime(),
            new Date('2022-05-15').getTime()
          ]
        },
        {
          x: 'KETI',
          y: [
            new Date('2023-07-01').getTime(),
            new Date() // 현재 진행형
          ]
        }
      ]
    },
    {
      name: 'Project',
      data: [
        {
          x: 'Test Time Reduction',
          y: [
            new Date('2022-01-02').getTime(),
            new Date('2022-06-15').getTime()
          ]
        },
        {
          x: '가상화폐 자동매매 프로그램',
          y: [
            new Date('2023-08-06').getTime(),
            new Date('2023-12-11').getTime()
          ]
        },
        {
            x: '탄소 데이터 분석 플랫폼',
            y: [
              new Date('2023-07-01').getTime(),
              new Date() // 현재 진행형
            ]
        }
      ]
    }
  ];


  return (
    <div>
      <Typed
        className='chart-title'
        strings={['제가 걸어온 길입니다']}
        typeSpeed={40}
        backSpeed={50}
        loop={false}
        showCursor={false}
      />
      <div id="chart">
        <ReactApexChart options={options} series={series} type="rangeBar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ApexChart;
