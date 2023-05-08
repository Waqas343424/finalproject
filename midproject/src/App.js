import React from "react";
import NavBar from "./NavBar"
import Home from "./Home";
import History from './History';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Main-Div">
      <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>
      </>
    </div>
  );
}

export default App;
