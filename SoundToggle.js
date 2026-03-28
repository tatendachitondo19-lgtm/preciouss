import React from 'react';
import { motion } from 'framer-motion';
import './SoundToggle.css';

const SoundToggle = ({ enabled, onToggle }) => {
  return (
    <motion.button
      className={`sound-toggle ${enabled ? 'enabled' : 'disabled'}`}
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      aria-label={enabled ? 'Disable sound' : 'Enable sound'}
    >
      <motion.div
        className="sound-icon"
        animate={enabled ? { rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5, repeat: enabled ? Infinity : 0, repeatDelay: 2 }}
      >
        {enabled ? '🔊' : '🔇'}
      </motion.div>
      
      <motion.div
        className="sound-waves"
        initial={{ opacity: 0 }}
        animate={{ opacity: enabled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="wave wave-1"
          animate={enabled ? { scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] } : {}}
          transition={{ duration: 1.5, repeat: enabled ? Infinity : 0 }}
        />
        <motion.span
          className="wave wave-2"
          animate={enabled ? { scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] } : {}}
          transition={{ duration: 1.5, repeat: enabled ? Infinity : 0, delay: 0.2 }}
        />
        <motion.span
          className="wave wave-3"
          animate={enabled ? { scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] } : {}}
          transition={{ duration: 1.5, repeat: enabled ? Infinity : 0, delay: 0.4 }}
        />
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle;
