import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import MainExperience from './components/MainExperience';
import BirthdayLetter from './components/BirthdayLetter';
import SoundToggle from './components/SoundToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Simulate loading time for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MainExperience 
            showLetter={showLetter}
            setShowLetter={setShowLetter}
            soundEnabled={soundEnabled}
          />
          
          {showLetter && (
            <BirthdayLetter 
              onClose={() => setShowLetter(false)}
            />
          )}

          <SoundToggle 
            enabled={soundEnabled}
            onToggle={setSoundEnabled}
          />
        </>
      )}
    </div>
  );
}

export default App;
