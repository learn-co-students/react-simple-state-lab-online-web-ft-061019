import React, { Component } from 'react';
import Cell from '/Users/dawn/react-simple-state-lab-online-web-ft-061019/src/Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) 
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return ( new Array(10).fill(defRow))
  }) ()
}