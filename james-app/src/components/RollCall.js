import React, { Component } from 'react';

class RollCall extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let counter = this.state.counter;
        let names = this.props.names;
        this.setState({
            counter: counter +1 < names.length ? counter + 1 : 0,
        })
    }

    render() {
        let names = this.props.names;
        let counter = this.state.counter;
        return (
            <div>
                <p>{names[counter]}</p>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default RollCall;