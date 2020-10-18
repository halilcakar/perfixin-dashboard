import './styles/App.css'

import React, { useEffect, useState } from 'react'

import Chart from './components/Chart'

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/perfixin')
      .then(response => response.json())
      .then(response => {
        const values = [];
        response.forEach(ch => {
          ch.data = JSON.parse(ch.data);
          values.push(ch);
        });

        setState(values)
      });
  }, [])
  
  return (
    <div className="root">
      <header className="App-header">Perfixin Dashboard</header>
      {
        !state.length ?
          <h1 className="App">Loading..</h1> :
          <main className="App">
            <Chart
              header="Time to First Byte"
              filter="timeToFirstByte"
              state={state}
            />
            <Chart
              header="First Contentful Paint"
              filter="firstContentfulPaint"
              state={state}
            />
            <Chart
              header="Dom Load Time"
              filter="domContentLoaded"
              state={state}
            />
            <Chart
              header="Window Load Time"
              filter="windowLoad"
              state={state}
            />
          </main>
      }
    </div>
  );
}

export default App;
