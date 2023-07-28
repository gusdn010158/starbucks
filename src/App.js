import './App.css';
import Body from './Body.js';
import Header from './Header.js';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
     <Routes>
      <Route path="/" element={ <Body/>}/> 
</Routes>
    </div> 
    </BrowserRouter>
  );
}

export default App;
