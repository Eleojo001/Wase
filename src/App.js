import React, { useContext,useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './sections/About';
import MobileRadio from './sections/mobile/MobileRadio';
import MobileTv from './sections/mobile/MobileTv';
import Mobilepodcast from './sections/mobile/Mobilepodcast';
export const DataContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home/>} />          
            <Route path='/about' element={<About/>} />                  
            <Route path='/waserock_103.9' element={<MobileRadio/>} />                  
            <Route path='/wase_rocktv' element={<MobileTv/>} />                  
            <Route path='/wase_podcast' element={<Mobilepodcast/>} />                  
            </Routes>
      </BrowserRouter>
      <div className='home-container'></div>
    </div>
  );
}

export default App;
