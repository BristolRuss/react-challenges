import React, { Component } from 'react';

class Adder extends Component {
    constructor(){
        super();
        this.state = {
            input: "",
            array: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e){
        this.setState({
            input: e.currentTarget.value
        })
    }

    handleClick(){
        let {input, array} = this.state;
        this.setState({
            array: [...array, input],
            input: ""
        })
    }

    render() {
        let input = this.state.input;
        let items = this.state.array;
        let total = items.reduce((runningTotal, item) => runningTotal += +item, 0);

        return (
            <div>
                <label style={{display: "block"}}>Add some numbers</label>
                <input value = {input} onChange={this.handleInput} type="number"></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <h1>The total is {total}</h1>
            </div>
        )
    }
}

export default Adder;