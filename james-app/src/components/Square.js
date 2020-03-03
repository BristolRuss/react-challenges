import React, { Component } from 'react';

class Square extends Component {
    constructor(){
        super();
        this.state = {
            clicked: "green",
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let {colour} = this.props;
        let current = this.state.counter;
        let odd = current %2;
        this.setState({
            counter: current + 1,
            clicked: odd ? "green" : colour
        })
    }

    render() {
        return (
            <div onClick={this.handleClick} style = {{
                background: this.state.clicked, 
                width: "150px",
                height: "150px"
            }}></div>
        )
    }
}

export default Square;