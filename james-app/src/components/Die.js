import React, { Component } from 'react';

class Die extends Component {
    constructor(){
        super();
        this.state = {
            roll: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let sides = this.props.sides;
        this.setState({
            roll: Math.floor((Math.random() * sides) + 1) 
        })
    }

    render() {
        let roll = this.state.roll;
        return (
            <div onClick={this.handleClick} style = {{
                background: "white",
                width: "200px",
                height: "200px"
            }}>
                <h1 style = {{
                    color: "black",
                    fontSize: "4.5rem",
                    textAlign: "center"
                }}>
                    {roll}
                </h1>
            </div>
        )
    }
}

export default Die;