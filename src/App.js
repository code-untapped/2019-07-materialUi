import React from 'react';
import './App.css';
import Chart from './BarChart'
import SimpleCard from './SimpleCard';
import Piechart from './PieChart';
import SimpleCardChart from './SimpleCardChart';
import ButtonAppBar from './AppNav';
import CompanyCard from './CompanyCard';


function App() {
  return (
    <div className="App">

    <ButtonAppBar />
    <div className='filter-div'>
    <h4>Investments in underrepresented founders vs. the rest of the market.</h4>
      <button>female</button>
      <button>male</button>
      <button>other</button>
    </div>
    <SimpleCard>
    <Chart/>
    </SimpleCard>

    <SimpleCardChart>
    <Piechart/>
    </SimpleCardChart>
    </div>
  );
}

export default App;
