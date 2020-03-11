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
                ["/catch-me-2", "Catch Me If You Can 2"],
                ["/articles", "Articles"],
                ["/clicked-hook", "Clicked Hook"],
                ["/square-hook", "Square Hook"],
                ["/toggle-hook", "Toggle Hook"],
                ["/counter-hook", "Counter Hook"],
                ["/step-hook", "StepCounter Hook"],
                ["/catch-me-hook", "Catch Me If You Can Hook"],
                ["/roll-call-hook", "RollCall Hook"],
                ["/colours-hook", "Colours Hook"],
                ["/dice-hook", "Dice Hook"],
                ["/lame-game-hook", "Lame-Game Hook"],
                ["/counter-hold", "Counter Hold"]
            ],
        };
    }


    render(){  
        let components = this.state.components;

        return (
            <>
                <div className="dropdown show">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Select</button>
                    <ul className="dropdown-menu scrollable-menu" role="menu">
                    {components.map((component, index) => 
                        <li key={index}><Link className="dropdown-item" to = {component[0]} >{component[1]}</Link></li>)}
                    </ul>
                </div>
                
            </>
        );
    }
}

export default Footer;