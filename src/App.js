import React from 'react';
import './index.css';
import './style/app.css';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './components/Collapse';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* <Apropos /> */}
     
      <Routes>

          <Route path="/" element={<Home />} />        
          <Route path="/apropos" element={<Apropos />} />         
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} /> 

      </Routes>
    </>
  );
}

export default App;
