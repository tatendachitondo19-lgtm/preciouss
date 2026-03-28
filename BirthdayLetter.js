import React from 'react';
import { motion } from 'framer-motion';
import './BirthdayLetter.css';

const BirthdayLetter = ({ onClose }) => {
  return (
    <motion.div 
      className="birthday-letter-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="letter-container"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="letter-header">
          <h2 className="letter-title fantasy-title">A Birthday Message for Precious</h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Close letter"
          >
            ✨
          </button>
        </div>

        <div className="letter-content">
          <motion.div 
            className="letter-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="letter-salutation">
              My Dearest Precious,
            </p>
            
            <p className="letter-paragraph">
              In the enchanted depths of our magical forest, where starlight dances on ancient trees 
              and whispers of wonder fill the air, there exists a soul as rare and brilliant as the 
              most precious gem. That soul is you.
            </p>
            
            <p className="letter-paragraph">
              Today, as the universe celebrates the day you graced this world with your presence, 
              I wanted to create something as extraordinary as you are—a realm where fantasy meets 
              reality, where every glowing orb carries a wish, and where even the creatures of the 
              deep know your name.
            </p>
            
            <p className="letter-paragraph">
              You bring light to every room you enter, joy to every heart you touch, and magic to 
              every moment you share. Your laughter is like wind chimes in a gentle breeze, your 
              smile brighter than any captured star, and your spirit as boundless as the cosmos itself.
            </p>
            
            <p className="letter-paragraph">
              May this birthday be the beginning of your most enchanting chapter yet. May you find 
              adventure in every sunrise, wisdom in every sunset, and may all your dreams take flight 
              on wings of stardust and possibility.
            </p>
            
            <p className="letter-paragraph">
              Remember always how truly precious you are—not just to me, but to the world itself. 
              You are a rare and beautiful treasure, a beacon of hope and happiness, and the 
              embodiment of all that is good and magical in this universe.
            </p>
            
            <p className="letter-closing">
              With all the love in the universe,
              <br />
              <span className="signature">Your Birthday Magic-Maker ✨</span>
            </p>
          </motion.div>

          <motion.div 
            className="magical-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="letter-sparkles">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="letter-sparkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="letter-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="footer-text">
            "May your birthday be as magical as you are, my precious one." 🌟
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayLetter;
