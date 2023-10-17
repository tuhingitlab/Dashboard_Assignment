// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Category A", value: 0 },
//   { name: "Category B", value: 0 },
//   { name: "Category C", value: 200 },
//   { name: "Category D", value: 100 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const DonutChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default DonutChart;

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Customer A", value: 50 },
  { name: "Customer B", value: 150 },
  { name: "Customer C", value: 200 },
  { name: "Customer D", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DonutChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
