import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props){
        super(props)
        this.state = {
            color: props.value
        }
    }

    onClick = () => {
        let hexUpdate = '#333'
        this.setState({
            color: hexUpdate
        })
    }

    render(){
        return (
            <div  onClick={this.onClick} className='cell' style={{backgroundColor: this.state.color}}></div>
        )
    }

}