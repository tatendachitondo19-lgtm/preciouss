import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MainExperience.css';

const MainExperience = ({ showLetter, setShowLetter, soundEnabled }) => {
  const [particles, setParticles] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [showSmeagolMessage, setShowSmeagolMessage] = useState(false);
  const [revealedPicture, setRevealedPicture] = useState(false);
  const [glowingOrbs, setGlowingOrbs] = useState([]);
  const containerRef = useRef(null);

  const birthdayWishes = [
    "May your dreams sparkle like stars ✨",
    "You shine brighter than any gem 💎",
    "Magic follows wherever you go 🌟",
    "Your smile lights up the darkness 🌙",
    "Wishing you endless joy and wonder 🦋",
    "You're more precious than gold 🏆",
    "May your heart always be full 💖",
    "Adventure awaits you, brave soul 🗡️"
  ];

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    // Generate glowing orbs
    const newOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 30 + 20,
      color: ['#8a2be2', '#4b0082', '#ffd700', '#ff69b4'][Math.floor(Math.random() * 4)],
      duration: Math.random() * 4 + 3
    }));
    setGlowingOrbs(newOrbs);

    // Show Smeagol message after delay
    const timer = setTimeout(() => {
      setShowSmeagolMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleHiddenWishClick = (x, y, wish) => {
    const newWish = {
      id: Date.now(),
      x,
      y,
      text: wish,
      timestamp: Date.now()
    };
    setWishes(prev => [...prev, newWish]);

    // Remove wish after 3 seconds
    setTimeout(() => {
      setWishes(prev => prev.filter(w => w.id !== newWish.id));
    }, 3000);
  };

  const handleRevealPicture = () => {
    setRevealedPicture(true);
    if (soundEnabled) {
      // Play magical sound effect
      playMagicalSound();
    }
  };

  const playMagicalSound = () => {
    // Create a simple magical sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.exponentialRampToValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  return (
    <div className="main-experience" ref={containerRef}>
      <div className="forest-bg" />
      <div className="cave-overlay" />

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      {glowingOrbs.map(orb => (
        <motion.div
          key={orb.id}
          className="glow-orb"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mist Effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="mist"
          style={{
            left: `${i * 20}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 100 + 50}px`
          }}
          animate={{
            x: [-200, 200],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hidden Interactive Areas */}
      {birthdayWishes.map((wish, index) => (
        <div
          key={index}
          className="hidden-wish"
          style={{
            left: `${15 + (index % 4) * 20}%`,
            top: `${20 + Math.floor(index / 4) * 30}%`
          }}
          onClick={(e) => handleHiddenWishClick(e.clientX, e.clientY, wish)}
        />
      ))}

      {/* Wish Popups */}
      <AnimatePresence>
        {wishes.map(wish => (
          <motion.div
            key={wish.id}
            className="wish-popup"
            style={{
              left: wish.x,
              top: wish.y,
              transform: 'translate(-50%, -100%)'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {wish.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ring-inspired Objects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="ring-object"
          style={{
            left: `${25 + i * 25}%`,
            top: `${60 + (i % 2) * 10}%`,
            borderColor: '#ffd700'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Main Content */}
      <div className="main-container">
        <motion.div 
          className="title-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="main-title fantasy-title">A Magical Birthday Awaits</h1>
          <p className="subtitle fantasy-text">Click the glowing rings to discover hidden wishes</p>
        </motion.div>

        {/* Smeagol Character */}
        <motion.div 
          className="character-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="smeagol-character">
            <img 
              src="/smeagol.webp" 
              alt="Smeagol" 
              className="smeagol-main-image"
            />
          </div>
          
          {showSmeagolMessage && (
            <motion.div 
              className="speech-bubble"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Happy Birthday, my Precious! 🎂
            </motion.div>
          )}
        </motion.div>

        {/* Reveal Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {!revealedPicture ? (
            <button 
              className="magic-button"
              onClick={handleRevealPicture}
            >
              Reveal Your Birthday Surprise ✨
            </button>
          ) : (
            <motion.div 
              className="precious-picture-reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="picture-frame">
                <img 
                  src="/precious-image.jpg" 
                  alt="Precious" 
                  className="precious-image"
                />
                <div className="picture-glow" />
              </div>
              <p className="picture-caption fantasy-text">The most precious birthday star! ⭐</p>
              
              <button 
                className="magic-button"
                onClick={() => setShowLetter(true)}
                style={{ marginTop: '30px' }}
              >
                Read Your Birthday Letter 💌
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MainExperience;
