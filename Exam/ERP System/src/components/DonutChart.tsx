import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
// import { Chart } from 'react-chartjs-2';
import {Chart, ArcElement, Legend} from 'chart.js'
Chart.register(ArcElement);

{/* <Chart type='line'/> */}

function YourChartComponent() {
  let data = [
    {
      label: "Rejected",
      value: 70,
      color: "rgba(229, 79, 83, 1)",
      cutout: "50%",
    },
    {
      label: "Pending",
      value: 80,
      color: "rgba(242, 148, 37, 1)",
      cutout: "50%",
    },
    {
      label: "Approved",
      value: 370,
      color: "rgba(16, 161, 66, 1)",
      cutout: "50%",
    },
  ];

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };


   return (
    <div style={{ width: "210px", height: "210px" }}>
      <Doughnut data={finalData} options={options} />
    </div>
  );

}

export default YourChartComponent; 
