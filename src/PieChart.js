import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Finance', value: 400, color: '#0088FE'},
  { name: 'Food', value: 300, color: '#00C49F' },
  { name: 'Education', value: 300, color: '#FFBB28'  },
  { name: 'Health', value: 200 , color: '#FF8042' },
  { name: 'SAAS', value: 200, color: '#FF8035'  },
  { name: 'Retail', value: 200, color: '#FF8035'  }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8024', '#FF8035'];


export default class Piechart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    const mappedData = data.map(item => (
      <div>
      <div bgcolor={item.color}>{item.name}</div>
      </div>
    ))
    return (
      <div>
        {mappedData}
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>  
      </PieChart>
      </div>
    );
  }
}
