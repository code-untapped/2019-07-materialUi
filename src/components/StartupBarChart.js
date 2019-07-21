import React from 'react';
import  { 
    BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

  const data = [
    {
      name: 'mob security', Benchmark: 20, BAME: 85, amt: 2400,
    },
    {
      name: 'mxnarchy', Benchmark: -20, BAME: 87, amt: 2210,
    },
    {
      name: 'sasuke', Benchmark: -50, BAME: 2, amt: 2290,
    },
    {
      name: 'eren', Benchmark: 30, BAME: 100, amt: 2000,
    },
    {
      name: 'onepunchman', Benchmark: -25, BAME: 12, amt: 2181,
    },
    {
      name: 'luffy', Benchmark: -1, BAME: -32, amt: 2500,
    },
    {
      name: 'joji', Benchmark: 25, BAME: 21, amt: 2100,
    },
  ];
  
const StartupBarChart = () => {
    return (
        <div>
            <BarChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Benchmark" fill="#8884d8" />
        <Bar dataKey="BAME" fill="#82ca9d" />
      </BarChart>
        </div>
    );
};

export default StartupBarChart;