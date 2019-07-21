import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ZAxis
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  { x: 100, y: 200, z: 200, },
  { x: 120, y: 100, z: 260, },
  { x: 170, y: 300, z: 400, },
  { x: 140, y: 250, z: 280, },
  { x: 150, y: 400, z: 500, },
  { x: 110, y: 280, z: 200, },
];

const data2 = [
  { x: 10, y: 10 }, { x: 100, y: 100 }, { x: 300, y: 300 }, { x: 500, y: 500 }, { x: 600, y: 600 }
]

export default class ScatterExample extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9Lfxjjty/';

  render() {
    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Cash Raised" unit="£M" />
        <YAxis type="number" dataKey="y" name="Revenue" unit="£M" />
        <ZAxis type="number" range={[100]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="BAME Companies" data={data} fill="#000000">
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
          }
        </Scatter>
        <Scatter name="Time" data={data2} fill="#000000" line shape="diamond" />
      </ScatterChart>
    );
  }
}