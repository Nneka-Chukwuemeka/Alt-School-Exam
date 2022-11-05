import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Repos from "./components/Repos/Repos.jsx";
import NotFound from "./components/Error/NotFound.jsx";
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'




function App () {
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Repos' element={<Repos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;