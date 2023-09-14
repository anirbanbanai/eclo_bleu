// "use client"
// import { useEffect, useState } from "react";
// import {Pie} from 'react-chartjs-2';
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CaragoryScal,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from "chart.js";

// // ChartJS.register(
// //     CaragoryScal,
// //     LinearScale,
// //     BarElement,
// //     Title,
// //     Tooltip,
// //     Legend
// // )





// const BarChart = () => {
//     const [chartData, setChartData] = useState({
//         datasets: [],
//     })
//     const [chartOption, setChartOption] = useState();

//     useEffect(() => {
//         setChartData({
//             labels: ["Mon", "Tues", "Wed ", "Thurs", "Fri", "Sat", "Sun"],
//             datasets: [
//                 {
//                     label: "Sales $",
//                     data: [13312, 234434, 45324, 67656, 2344, 898765, 54656],
//                     borderColor: "rgb(53,162,235)",
//                     backgroundColor: 'rgb(53,162,235,0.4)',
//                 }
//             ]
//         })
//     }, [])
//     return (
//         <>
//             <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-xl ">
//                 {/* <Bar data={chartData} options={chartOption}/> */}
               

//             </div>
//         </>
//     );
// };


// export default BarChart;

import React from 'react';

const BarChart = () => {
    return (
        <div>
            barchat
        </div>
    );
};

export default BarChart;