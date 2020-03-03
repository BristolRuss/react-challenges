import React, { Component } from 'react';

class CatchMeIfYouCan extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let counter = this.state.counter;
        let jump = this.props.jump;
        this.setState({
            counter: counter + jump,
        })
    }

    render() {
        let counter = this.state.counter;
        return (
            <div>
                <button onClick={this.handleClick} style = {{
                    marginTop: counter
                }}>Can't Catch Me!</button>
            </div>
        )
    }
}

export default CatchMeIfYouCan;