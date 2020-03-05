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
                width: "15rem",
                height: "15rem",
                display: "space-between",
                justifyItems: "center"
            }}>
                <h1 style = {{
                    color: "black",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "11rem"
                }}>
                    {roll}
                </h1>
            </div>
        )
    }
}

export default Die;