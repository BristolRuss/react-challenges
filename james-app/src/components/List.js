import React, { Component } from 'react';

class List extends Component {
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
            array: [...array, input]
        })
    }

    render() {
        let input = this.state.input;
        let items = this.state.array;

        return (
            <div>
                <label style={{display: "block"}}>Add some items</label>
                <input value = {input} onChange={this.handleInput}></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default List;