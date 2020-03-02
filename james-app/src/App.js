import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/> 
        <img src={logo} className="App-logo" alt="logo" />
        <Paragraph/>
        <Square/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
