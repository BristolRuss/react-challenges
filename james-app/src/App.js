import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/> 
        <img src={logo} className="App-logo" alt="logo" />
        <Paragraph/>
        <Square/>
        <People/>
      </header>
    </div>
  );
}

export default App;
