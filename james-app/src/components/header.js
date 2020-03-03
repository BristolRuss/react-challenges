import React, { Component } from 'react';

class Header extends Component  {
    render() {
        let { text, children} = this.props;
        return (
            <header>
                <h1>{text}</h1>
                {children}
            </header>
        );
    }
}

export default Header;