import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = () => (
<>
    <Header text="Things with cats" />
    <Paragraph message="Cats are wonderful"/>
    <Square />
    <People />
</>
);

export default Stuff;