import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Index from './components/Index/Index';
import Map from './components/Map/Map';
import Timer from './components/Timer/Timer';
import Resume from './components/Resume/Resume';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router';

function App() {
  const [countSeconds, setCountSeconds] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/index" replace />} path="/" />
          <Route element={<Index />} path="/index" />
          <Route
            element={
              <Timer
                countSeconds={countSeconds}
                setCountSeconds={setCountSeconds}
              />
            }
            path="/timer"
          />
          <Route element={<Map />} path="/map" />
          <Route element={<Resume />} path="/resume" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
