import React, { Component } from 'react';

class LameGame extends Component {
    constructor(){
        super();
        this.state = {
            timer: 0,
            start: 0,
            end: 0,
            clicked: 0,
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart(){
        this.setState({
            timer: 1,
            start: Date.now()
        })
    }

    handleStop(){
        this.setState({
            clicked: 1,
            end: Date.now()
        })
    }

    handleReset(){
        this.setState({
            timer: 0,
            clicked: 0,
            start: 0,
            end: 0,
        })
    }

    render() {
        let aim = this.props.aim;
        let {timer, clicked, start, end} = this.state;
        let difference = (end - start) / 1000;
        let answer = aim - difference;
        return (
            <div>
                {timer === 1 ? <h1>The target is {aim} seconds</h1> : null}
                {clicked === 1 ? answer >= 0 ? <h1>You were {answer.toFixed(2)} seconds under!</h1> 
                : <h1>You were {Math.abs(answer.toFixed(2))} seconds over!</h1> : null}
                {timer === 0 ? <button onClick={this.handleStart}>Start</button> : null}
                {timer === 1 && clicked === 0? <button onClick={this.handleStop}>Now!</button> : null}
                {clicked === 1 ? <button onClick={this.handleReset}>Reset</button> : null}
            </div>
        )
    }

}

export default LameGame;
