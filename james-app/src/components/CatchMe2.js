import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CatchMe2 extends Component {
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
                <Button onClick={this.handleClick} style={{
                    marginTop: counter
                }}>Catch Me If You Can</Button>
        )
    }
}

export default CatchMe2;