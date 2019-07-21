import React from 'react';
import  { 
  BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell , ScatterChart, ZAxis, Scatter
} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import AppHeader from './components/AppHeader';
import { Card, CardContent, CardHeader, } from '@material-ui/core';

import StartupBarChart from './components/StartupBarChart';
import TopPerformers from './components/TopPerformers/TopPerformers';

const bame = [
  {
    "x": 100,
    "y": 200,
    "z": 200
  },
  {
    "x": 200,
    "y": 400,
    "z": 300
  },
  {
    "x": 300,
    "y": 800,
    "z": 100
  },
  {
    "x": 400,
    "y": 1600,
    "z": 200
  },
  {
    "x": 500,
    "y": 3200,
    "z": 300
  },
  {
    "x": 600,
    "y": 6400,
    "z": 200
  }
];
const benchmark = [
  {
    "x": 100,
    "y": 100,
    "z": 240
  },
  {
    "x": 200,
    "y": 200,
    "z": 220
  },
  {
    "x": 300,
    "y": 300,
    "z": 250
  },
  {
    "x": 400,
    "y": 400,
    "z": 210
  },
  {
    "x": 500,
    "y": 500,
    "z": 260
  },
  {
    "x": 600,
    "y": 600,
    "z": 230
  }
];

const useStyles = makeStyles({
  card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});



function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppHeader />
      <TopPerformers />
      <Card className={classes.card}>
                <CardContent>
                    <CardHeader
                        title="Comparison of BAME & UK Revenue"
                     /> 
                      <ScatterChart width={730} height={250}
    margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="funding" unit="£" />
        <YAxis dataKey="y" name="revenue" unit="£" />
        <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="BAME" data={bame} fill="#8884d8" />
        <Scatter name="UK Benchmark" data={benchmark} fill="#82ca9d" />
      </ScatterChart>   
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <CardHeader
                        title="Percentage Performance of BAME vs. Benchmark"
                     /> 
                      <StartupBarChart />  
                </CardContent>
            </Card>
    </div>
  );
}

export default App;
