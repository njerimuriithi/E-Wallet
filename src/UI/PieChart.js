import React from 'react'
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
//npm i react-chartjs-2 chart.js  
function PieChart() {
  const userdata = {
    labels: ["usersgained","Food","Clothing"],
    datasets: [
      {
        // label: ["Food","Credit","Clothing"],
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)"
        ]
      }
    ]
  }
  return (
    <div>
      <div className='  w-[250px] h-[250px]'>
      <Pie data={userdata}/>
      </div>
            

    </div>
  )
}

export default PieChart