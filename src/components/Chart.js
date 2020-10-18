import { Chart } from 'react-charts'
import React from 'react'

const style = {
  width: '500px',
  height: '300px',
  textAlign: 'center'
}

const axes = [
  { primary: true, type: 'linear', position: 'bottom' },
  { type: 'linear', position: 'left' }
]

export default function MyChart({ header, filter, state }) {
  const data = [{
    label: header,
    data: state.map((ch, index) => [index, ch.data[filter]])
  }];


  return (
    <div className="chart" >
      <h4 className="chart-header">{header}</h4>
      <div style={style}>
        <Chart data={data} axes={axes} />
      </div>
      <p style={{ margin: '0px' }}>Every x is represents a client</p>
    </div>
  );
}
