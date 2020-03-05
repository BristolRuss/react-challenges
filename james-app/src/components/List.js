import React, { Component } from 'react';

class List extends Component {
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

        return (
            <form onSubmit={this.form}>
                <label style={{display: "block"}}>Add some items</label>
                <input value = {input} onChange={this.handleInput}></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </form >
        )
    }
}

export default List;