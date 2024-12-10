import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom' ;

import HomePage from './pages/homepage.js'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="homepage" element={<HomePage/>}/>
      </Routes>
    </>
  );
  
}

export default App;
