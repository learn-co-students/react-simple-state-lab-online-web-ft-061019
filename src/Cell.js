import React, { Component } from 'react';

class Cell extends Component {
   constructor(props) {
      super(props);
      this.state = {
         color: this.props.value
      }
   }
   
   handleClick = (event) => {
      this.setState({
         color: '#333'
      })
   }

   render() {
      return (
         <div 
            className="cell"
            onClick={this.handleClick}
            style={{backgroundColor: this.state.color}}>cell
         </div>
      )
   }
}

export default Cell