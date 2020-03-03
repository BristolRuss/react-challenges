import React, { Component } from 'react';

class Paragraph extends Component  {
    render() {
        let { message } = this.props;
        return (
            <p>{message}</p>
        );
    }
}

Paragraph.defaultProps = {
    message: "Hello, world!"
}

export default Paragraph;