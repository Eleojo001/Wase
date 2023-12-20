import React, { useContext,useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './sections/About';

export const DataContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home/>} />          
            <Route path='/about' element={<About/>} />                  
            </Routes>
      </BrowserRouter>
      <div className='home-container'></div>
    </div>
  );
}

export default App;
