import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <Home/>
    </div>
  );
}

export default App;
