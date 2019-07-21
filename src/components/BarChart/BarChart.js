import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Mob Security', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Aries', uv: -3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Poundless', uv: -2000, pv: -9800, amt: 2290,
  },
  {
    name: 'Halo', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Suave', uv: -1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Mxnarchy', uv: 2390, pv: -3800, amt: 2500,
  },
  {
    name: 'Insomnia', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
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
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}
