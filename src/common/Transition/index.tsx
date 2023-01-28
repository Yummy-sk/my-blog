import React from 'react';
import { motion } from 'framer-motion';

export function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ type: 'linear' }}
      style={{
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}
