import React, { Component } from 'react';

class PasswordStrength extends Component {
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
        let length = input.length;
        let empty = length === 0 ? "white" : null;
        let weak = length >= 1 && length <9 ? "red" : empty;
        let medium = length >= 9 && length < 16 ? "orange" : weak;
        let strong = length >= 16 ? "green" : medium;

        return (
            <div>
                <input value = {input} onChange={this.handleInput} type="password" style = {{
                    background: strong 
                }}></input>
            </div>
        )
    }
}

export default PasswordStrength;