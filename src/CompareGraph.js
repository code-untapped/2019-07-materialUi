import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
     bame: 4000, benchmark: 2400, amt: 2400,
  },
  {
     bame: 3000, benchmark: 1398, amt: 2210,
  },
  {
     bame: 2000, benchmark: 4800, amt: 2290,
  },
  {
     bame: 2780, benchmark: 3908, amt: 2000,
  },
  {
     bame: 1890, benchmark: 4800, amt: 2181,
  },
  {
     bame: 2390, benchmark: 3800, amt: 2500,
  },
  {
     uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class CompareExample extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';

  state = {
    opacity: {
      bame: 1,
      benchmark: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    const { opacity } = this.state;

    return (
      <div>
        <LineChart
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
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          <Line type="monotone" dataKey="bame" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="benchmark" strokeOpacity={opacity.uv} stroke="#82ca9d" />
        </LineChart>
        <p className="notes"></p>
      </div>
    );
  }
}