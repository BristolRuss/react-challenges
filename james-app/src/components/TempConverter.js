import React, { Component } from 'react';

class TempConverter extends Component {
    constructor(){
        super();
        this.state = {
            celcius: 1,
            fahrenheit: 32,
        };
        this.handleCelcius = this.handleCelcius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }

    handleCelcius(e){
        let input = e.currentTarget.value
        this.setState({
            celcius: input,
            fahrenheit: input * (9 / 5) + 32,
        })
    }

    handleFahrenheit(e){
        let input = e.currentTarget.value
        this.setState({
            fahrenheit: input,
            celcius: (input -32) * 5 / 9, 
        })
    }

    render() {
        let {celcius, fahrenheit} = this.state;

        return (
            <form>
                <label for="celcius" style = {{display: "block"}}>Celcius</label>
                <input id="celcius" value = {celcius} onChange={this.handleCelcius} type = "number"></input>
                <label for="fahrenheit" style = {{display: "block"}}>Fahrenheit</label>
                <input id="fahrenheit" value = {fahrenheit} onChange={this.handleFahrenheit} type = "number"></input>
            </form>
        )
    }
}

export default TempConverter;