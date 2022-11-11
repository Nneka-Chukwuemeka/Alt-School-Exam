import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Repos from "./components/Repos/Repos.jsx";
import NotFound from "./components/Error/NotFound.jsx";
import NavBar from './components/NavBar/NavBar.jsx'
import LearnMore from './components/Repos/LearnMore'
import './App.css'




function App() {
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Repos'>
          <Route index element={<Repos />} />
          <Route path=':id' element={<LearnMore />} />
          <Route path=":*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;