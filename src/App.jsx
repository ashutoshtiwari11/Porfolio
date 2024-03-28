import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/index'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Projects'
import './App.scss'

const App = () => {
  return (<>
    <Routes>
        <Route index element={<Home/>} />
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/project' element={<Project/>}></Route>
    </Routes>
     </>
  );
};

export default App
