import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';
import ToggleText from './ToggleText';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import Colours from './Colours';
import Die from './Die';
import LameGame from './LameGame';
import Length from './Length';
import PasswordStrength from './PasswordStrength';
import TempConverter from './TempConverter';
import List from './List';
import Adder from './Adder';
import Footer from './Footer';
import FourOhFour from './FourOhFour';

const Stuff = () => (
        <Router>
            <Switch>
                <Route exact path = "/">
                    <Header text="Please select a component using the dropdown">    
                        <Paragraph message="P.s Cats are wonderful"/>
                    </Header>
                </Route>
                <Route exact path = "/square">
                    <Square colour="red" height="300px" width="400px" />
                </Route>
                <Route path = "/square/:colour" render = { ({match}) => (
                    <Square colour = {match.params.colour} />
                ) } />
                <Route exact path = "/people">
                    <People names = {["James", "Rebecca", "Amanda", "John", "Brenda", "Tony", "Sue"]}/>
                </Route>
                <Route exact path = "/toggle-text">
                    <ToggleText initial = "Hello" alternative = "World"/>
                </Route>
                <Route exact path = "/counter">
                    <Counter initial = {50} max = {100}/>
                </Route>
                <Route exact path = "/step-counter">
                    <StepCounter max={ 100 } step={ 5 } />
                </Route>
                <Route path = "/steps/:max/:step" render = { ({match}) => (
                    <StepCounter max = {match.params.max} step = {match.params.step} />
                ) } />
                <Route exact path = "/clicked" component = {Clicked}/>
                <Route exact path = "/catch-me">
                    <CatchMeIfYouCan jump={ 100 }/>
                </Route>
                <Route exact path = "/rollcall">
                    <RollCall names = {["James", "Rebecca", "Amanda", "John", "Brenda", "Tony", "Sue"]}/>
                </Route>
                <Route exact path="/colours">
                    <Colours colours = {["#C14412","#EBB31A","#8F5318","#009EAD","#395967",]}/>
                </Route>
                <Route exact path="/die">
                    <Die sides={ 6 } />
                </Route>
                <Route exact path="/lame-game">
                    <LameGame aim={ 10 }/>
                </Route>
                <Route exact path="/length" component = {Length}/>
                <Route exact path="/password" component = {PasswordStrength} />
                <Route exact path="/temp-converter" component={TempConverter} />
                <Route exact path="/list" component = {List}/>
                <Route exact path="/adder" component = {Adder}/>
                <Route component = {FourOhFour} />
            </Switch>
            <Route component = {Footer} />
        </Router>
);

export default Stuff;