import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            components: [
                ["/", "Home"],
                ["/square", "Square"],
                ["/people", "People"],
                ["/toggle-text", "Toggle Text"],
                ["/counter", "Counter"],
                ["/step-counter", "Step Counter"],
                ["/clicked", "Clicked"],
                ["catch-me", "Catch Me If You Can"],
                ["/rollcall", "Roll Call"],
                ["/colours", "Colours"],
                ["/die", "Dice"],
                ["/lame-game", "Lame Game"],
                ["/length", "Length"],
                ["/password", "Password Checker"],
                ["/temp-converter", "Temperature Converter"],
                ["/list", "List"],
                ["/adder", "Adder"],
                ["/progress", "Progress"],
                ["/catch-me-2", "Catch Me If You Can 2"]
            ],
        };
    }


    render(){  
        let components = this.state.components;

        return (
            <>
                <div className="dropdown show">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Select</button>
                    <div className="dropdown-menu">
                    {components.map((component, index) => 
                        <Link className="dropdown-item" to = {component[0]} key={index}>{component[1]}</Link>)}
                    </div>
                </div>
                
            </>
        );
    }
}

export default Footer;