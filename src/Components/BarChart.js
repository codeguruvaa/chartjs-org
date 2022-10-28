import React from 'react';
import {Bar} from 'react-chartjs-2';
import "chart.js/auto";


function BarChart({chartData}) {
    return (
        <div>
            <Bar 
             data={chartData}
            

             />


        </div>
    );
}

export default BarChart;