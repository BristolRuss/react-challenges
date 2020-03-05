import React, { Component } from 'react';

class Header extends Component  {
    render() {
        let { text, children} = this.props;
        return (
            <header>
                <h1>Welcome to my little App</h1>
                <h3>{text}</h3>
                {children}
            </header>
        );
    }
}

export default Header;