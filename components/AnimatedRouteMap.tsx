'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Truck, Plane } from 'lucide-react';

export default function AnimatedRouteMap() {
  // Coordinates for the three countries (relative positions on the map)
  const locations = {
    uk: { x: '25%', y: '30%', name: 'United Kingdom' },
    poland: { x: '55%', y: '25%', name: 'Poland' },
    spain: { x: '20%', y: '65%', name: 'Spain' },
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#1C355E]/5 to-[#0EA5E9]/5 rounded-3xl overflow-hidden shadow-card-premium">
      {/* Simplified Europe Map Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Simplified Europe landmass */}
          <path
            d="M150,200 Q200,150 300,180 L350,160 Q400,170 450,150 L480,180 Q500,200 480,250 L450,300 Q420,350 380,360 L350,380 Q300,400 250,390 L200,420 Q150,400 120,360 L100,300 Q90,250 120,220 Z"
            fill="#1C355E"
            opacity="0.1"
          />
          {/* UK */}
          <path
            d="M180,220 Q190,200 210,210 L200,240 Q190,245 180,235 Z"
            fill="#1C355E"
            opacity="0.2"
          />
          {/* Spain */}
          <path
            d="M140,380 Q180,370 200,390 L180,420 Q150,415 140,400 Z"
            fill="#1C355E"
            opacity="0.2"
          />
          {/* Poland */}
          <path
            d="M420,180 Q440,175 450,190 L445,210 Q430,215 420,200 Z"
            fill="#1C355E"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {/* UK to Poland */}
        <motion.path
          d="M 200 180 Q 350 120 440 150"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        {/* Poland to Spain */}
        <motion.path
          d="M 440 150 Q 300 300 160 390"
          stroke="url(#gradient2)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
        />
        {/* Spain to UK */}
        <motion.path
          d="M 160 390 Q 120 280 200 180"
          stroke="url(#gradient3)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Gradients for lines */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E87722" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E87722" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E87722" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Location Markers */}
      {Object.entries(locations).map(([key, loc]) => (
        <motion.div
          key={key}
          className="absolute"
          style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Pulsing Circle */}
          <motion.div
            className="absolute inset-0 w-16 h-16 rounded-full bg-[var(--primary-teal)]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          {/* Marker Pin */}
          <div className="relative w-16 h-16 bg-[var(--accent-orange)] rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
          {/* Location Label */}
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <div className="bg-white px-3 py-1 rounded-lg shadow-lg border border-gray-200">
              <p className="text-xs font-bold text-[#1C355E]">{loc.name}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Animated Vehicles */}
      {/* Truck: UK to Poland */}
      <motion.div
        className="absolute z-20"
        initial={{ x: 200, y: 180 }}
        animate={{
          x: [200, 350, 440],
          y: [180, 120, 150],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      >
        <motion.div
          className="bg-[var(--accent-orange)] p-3 rounded-full shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Truck className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Ship: Poland to Spain */}
      <motion.div
        className="absolute z-20"
        initial={{ x: 440, y: 150 }}
        animate={{
          x: [440, 300, 160],
          y: [150, 300, 390],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
          delay: 2.5,
        }}
      >
        <motion.div
          className="bg-[var(--primary-teal)] p-3 rounded-full shadow-lg"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -5, 0, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Ship className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Plane: Spain to UK */}
      <motion.div
        className="absolute z-20"
        initial={{ x: 160, y: 390 }}
        animate={{
          x: [160, 120, 200],
          y: [390, 280, 180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
          delay: 5,
        }}
      >
        <motion.div
          className="bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-orange)] p-3 rounded-full shadow-lg"
          animate={{
            rotate: [-45, -35, -45],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Plane className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" style={{ zIndex: 0 }} />
    </div>
  );
}
