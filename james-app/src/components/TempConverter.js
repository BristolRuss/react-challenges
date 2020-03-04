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
        let celcius = this.state.celcius;
        let fahrenheit = this.state.fahrenheit;

        return (
            <>
                <div>
                    <label for="celcius" style = {{display: "block"}}>Celcius</label>
                    <input id="celcius" value = {celcius} onChange={this.handleCelcius} type = "number"></input>
                </div>
                <div>
                    <label for="fahrenheit" style = {{display: "block"}}>Fahrenheit</label>
                    <input id="fahrenheit" value = {fahrenheit} onChange={this.handleFahrenheit} type = "number"></input>
                </div>
            </>
        )
    }
}

export default TempConverter;