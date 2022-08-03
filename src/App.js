import React, { useEffect, useState } from 'react';
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
  let timerId = 0;
  let timerRefresh = 0;
  const [countSeconds, setCountSeconds] = useState(0);

  const startTimer = () => {
    if (countSeconds == 0) {
      setCountSeconds(countSeconds + 1);
    }
  };

  const refreshTimer = () => {
    clearTimeout(timerRefresh);
    clearTimeout(timerId);
    timerRefresh = setTimeout(() => {
      setCountSeconds(1);
    }, 1000);
  };

  useEffect(() => {
    if (countSeconds > 0) {
      timerId = setTimeout(() => {
        setCountSeconds(countSeconds + 1);
      }, 1000);
    }
  }, [countSeconds]);

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
                timerId={timerId}
                startTimer={startTimer}
                refreshTimer={refreshTimer}
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
