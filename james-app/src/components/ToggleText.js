import React, { Component } from 'react';

class ToggleText extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let current = this.state.counter;
        this.setState({
            counter: current + 1,
        })
    }

    render() {
        let state = this.state;
        let {initial, alternative} = this.props;
        return (
            <div>
                <p>{state.counter % 2 === 0 ? initial : alternative }</p>
                <button onClick={this.handleClick}>Push me</button>
            </div>
        )
    }
}

export default ToggleText;