'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Ship, Plane, Truck, Box, Globe } from 'lucide-react';

export default function FloatingElements() {
  const elements = [
    { Icon: Package, position: { top: '10%', left: '10%' }, delay: 0, duration: 6 },
    { Icon: Ship, position: { top: '20%', right: '15%' }, delay: 1, duration: 7 },
    { Icon: Plane, position: { bottom: '25%', left: '8%' }, delay: 2, duration: 5 },
    { Icon: Truck, position: { top: '60%', right: '10%' }, delay: 0.5, duration: 6.5 },
    { Icon: Box, position: { bottom: '15%', right: '20%' }, delay: 1.5, duration: 5.5 },
    { Icon: Globe, position: { top: '45%', left: '5%' }, delay: 2.5, duration: 7.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const { Icon, position, delay, duration } = element;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={position}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -30, 0],
              x: [0, 10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12 text-[var(--primary-teal)]" strokeWidth={1} />
          </motion.div>
        );
      })}

      {/* Animated Clouds */}
      <motion.div
        className="absolute top-[15%] left-0"
        animate={{
          x: ['-100%', '100vw'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 30C50 20 60 15 70 15C70 10 80 5 90 5C100 5 110 10 110 15C120 15 130 20 130 30C130 40 120 45 110 45H70C60 45 50 40 50 30Z"
            fill="#0EA5E9"
            opacity="0.1"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-0"
        animate={{
          x: ['100vw', '-100%'],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      >
        <svg width="250" height="80" viewBox="0 0 250 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60 40C60 25 75 18 90 18C90 12 105 6 120 6C135 6 150 12 150 18C165 18 180 25 180 40C180 55 165 62 150 62H90C75 62 60 55 60 40Z"
            fill="#E87722"
            opacity="0.08"
          />
        </svg>
      </motion.div>
    </div>
  );
}
