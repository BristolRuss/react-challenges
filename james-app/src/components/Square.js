import React, { Component } from 'react';

class Square extends Component {
    constructor(){
        super();
        this.state = {
            colour: "green",
            height: "150px",
            width: "150px",
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
        let props = this.props;
        return (
            <div onClick={this.handleClick} style = {{
                background: state.counter % 2 === 0 ? state.colour : props.colour, 
                width: "150px",
                height: "150px",
            }}></div>
        )
    }
}

export default Square;