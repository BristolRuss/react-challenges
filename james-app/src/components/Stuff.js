import React from 'react';
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

const Stuff = ({square}) => (
<>
    {/* <Header text="Things with cats">    
        <Paragraph message="Cats are wonderful"/>
    </Header>
    {square === true ? (<Square colour="red" height="300px" width="400px" />) : null }
    <People names = {["James", "Rebecca", "Amanda", "John", "Brenda", "Tony", "Sue"]}/>
    <ToggleText initial = "Hello" alternative = "World"/>
    <Counter initial = {50} max = {100}/>
    <StepCounter max={ 100 } step={ 5 } />
    <Clicked />
    <CatchMeIfYouCan jump={ 100 }/>
    <RollCall names = {["James", "Rebecca", "Amanda", "John", "Brenda", "Tony", "Sue"]}/>
    <Colours colours = {["#C14412","#EBB31A","#8F5318","#009EAD","#395967",]}/> */}
    <Die sides={ 6 } />

</>
);

Stuff.defaultProps = {
    square: true
}

export default Stuff;