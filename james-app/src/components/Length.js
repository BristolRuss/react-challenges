import React, { Component } from 'react';

class Length extends Component {
    constructor(){
        super();
        this.state = {
            input: "",
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        this.setState({
            input: e.currentTarget.value
        })
    }

    render() {
        let input = this.state.input;
        return (
            <div>
                <input value = {input} onChange={this.handleInput}></input>
                <p>This string is {input.length} characters in length</p>
            </div>
        )
    }
}

export default Length;