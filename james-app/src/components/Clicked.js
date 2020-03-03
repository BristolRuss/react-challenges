import React, { Component } from 'react';

class Clicked extends Component {
    constructor(){
        super();
        this.state = {
            clicked: "Not Clicked",
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let current = this.state.clicked;
        this.setState({clicked: "Clicked"})
    }

    render() {
        return (
        <p onClick={this.handleClick}>{this.state.clicked}</p>
        );
    }
}

export default Clicked;