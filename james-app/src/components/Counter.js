import React, { Component } from 'react';

class Counter extends Component {
    constructor({initial}){
        super();
        this.state = {
            counter: initial,
        };
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus(){
        let current = this.state.counter;
        const max = this.props.max;
        this.setState({
            counter: current <= (max - 1) ? current + 1 : current,
        })
    }

    handleMinus(){
        let current = this.state.counter;
        this.setState({
            counter: current > 0 ? current - 1 : current,
        })
    }

    render() {
        let counter = this.state.counter;
        return (
            <div>
                <p>{counter}</p>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        )
    }
}

export default Counter;