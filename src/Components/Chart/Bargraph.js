// import React from "react";
// import {
//   BarChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Bar,
// } from "recharts";

// const data = [
//   { name: "Jan", value: 10 },
//   { name: "Feb", value: 15 },
//   { name: "March", value: 8 },
//   { name: "April", value: 20 },
//   { name: "May", value: 12 },
//   { name: "Jun", value: 10 },
//   { name: "Jul", value: 15 },
//   { name: "Aug", value: 25 },
//   { name: "Sep", value: 20 },
//   { name: "Oct", value: 12 },
//   { name: "Nov", value: 20 },
//   { name: "Dec", value: 12 },
// ];

// const BarGraph = () => {
//   return (
//     <BarChart width={600} height={400} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       {/* <YAxis /> */}
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="value" fill="#8884d8" />
//     </BarChart>
//   );
// };

// export default BarGraph;

import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "March", value: 8 },
  { name: "April", value: 20 },
  { name: "May", value: 12 },
  { name: "Jun", value: 10 },
  { name: "Jul", value: 15 },
  { name: "Aug", value: 25 },
  { name: "Sep", value: 20 },
  { name: "Oct", value: 12 },
  { name: "Nov", value: 20 },
  { name: "Dec", value: 12 },
];

const BarGraph = () => {
  return (
    <div className="bar-chart-container">
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarGraph;
