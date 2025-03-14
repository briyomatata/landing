import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/routes/Home';
// import About from './routes/About';
// import Project from './routes/Project';
// import Contact from './routes/Contact';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/about' element={<About/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/> */}
   </Routes>

   </>
  );
}

export default App;
