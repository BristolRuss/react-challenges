import React, { Component } from 'react';

class Colours extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let counter = this.state.counter;
        let length = this.props.colours.length
        this.setState({
            counter: counter +1 < length ? counter + 1 : 0,
        })
    }

    render() {
        let colours = this.props.colours;
        let counter = this.state.counter;
        return (
            <div onClick={this.handleClick} style = {{
                background: colours[counter],
                width: "200px",
                height: "200px"
            }}>
            </div>
        )
    }
}

export default Colours;