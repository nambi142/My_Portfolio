import React from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Ecommerce from './pages/Ecommerce';
import Portfolio from './pages/Portfolio';
import Todoapp from './pages/Todoapp';
import Chatbot from './pages/Chatbot';
import Footer from './pages/Footer';

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route 
          path='/'
          element={
            <>
              <Home />
              <Aboutme />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path='/Projects/Ecommerce' element={<Ecommerce />} />
        <Route path='/Projects/Portfolio' element={<Portfolio />} />
        <Route path='/Projects/Todoapp' element={<Todoapp />} />
        <Route path='/Projects/Chatbot' element={<Chatbot />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
