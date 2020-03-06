import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';


class Progress extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let counter = this.state.counter
        this.setState({
            counter: counter + 10,
        })
    }

    render() {
        let now = this.state.counter;
        const progressInstance = <ProgressBar animated now={now} label={`${now}%`} />;
        return (
            <div className="wrapper">
                {progressInstance}
                {now <100 ? <Button variant="primary" onClick={this.handleClick}>More!</Button> : <Button variant="danger" disabled>No Clickey!</Button>}
            </div>
        )
    }
}

export default Progress;