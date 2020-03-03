import React, { Component } from 'react';

class StepCounter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus(){
        let current = this.state.counter;
        const {max, step}  = this.props;
        this.setState({
            counter: current <= (max - 1) ? current + step : current,
        })
    }

    handleMinus(){
        let current = this.state.counter;
        const {step}  = this.props;
        this.setState({
            counter: current > (0) ? current - step : current,
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

export default StepCounter;