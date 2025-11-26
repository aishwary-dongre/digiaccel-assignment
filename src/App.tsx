import React, { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import Home from './pages/Home';

function App() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(() => {
    const saved = localStorage.getItem('hasSeenOnboarding');
    return saved === 'true';
  });

  const handleGetStarted = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setHasSeenOnboarding(true);
  };

  if (!hasSeenOnboarding) {
    return <Onboarding onGetStarted={handleGetStarted} />;
  }

  return <Home />;
}

export default App;
