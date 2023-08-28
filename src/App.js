// src/App.js
import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? <SplashScreen /> : <h1>Main Content</h1>}
    </div>
  );
}

export default App;
