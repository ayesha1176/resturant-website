import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/pagenotFound';




function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
