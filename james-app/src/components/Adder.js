import React, { Component } from 'react';

class Adder extends Component {
    constructor(){
        super();
        this.state = {
            input: "",
            items: [],
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
        let {input, items} = this.state;
        let newArray = [...items, input]
        this.setState({
            items: newArray,
            input: ""
        })
    }

    form(e){
        e.preventDefault();
    }

    render() {
        let {input, items} = this.state;
        let total = items.reduce((runningTotal, item) => runningTotal += +item, 0);

        return (
            <form onSubmit={this.form}>
                <label style={{display: "block"}}>Add some numbers</label>
                <input value = {input} onChange={this.handleInput} type="number"></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <h1>The total is {total}</h1>
            </form>
        )
    }
}

export default Adder;