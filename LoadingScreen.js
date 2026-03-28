import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [text, setText] = useState('');
  const [showCharacter, setShowCharacter] = useState(false);
  
  const fullText = "In the depths of the magical forest...";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCharacter(true), 500);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="loading-content">
        <motion.div 
          className="magical-forest-bg"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="fantasy-title">{text}</h1>
        </motion.div>

        {showCharacter && (
          <motion.div 
            className="smeagol-silhouette"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="/smeagol.webp" 
              alt="Smeagol" 
              className="smeagol-image"
            />
            <motion.div 
              className="glowing-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        <motion.div 
          className="loading-particles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          className="loading-mist"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="mist-cloud"
              style={{
                left: `${i * 25}%`,
                animationDelay: `${i * 0.5}s`
              }}
              animate={{
                x: [-100, 100],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
