'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface EuropeMapProps {
  className?: string;
}

export default function EuropeMap({ className = '' }: EuropeMapProps) {
  // Coordinates adjusted for the Wikimedia Europe map
  // These are approximate positions for UK, Poland, and Spain
  const markers = [
    {
      country: 'UK',
      x: 380,
      y: 280,
      color: '#E87722',
      delay: 0.3,
    },
    {
      country: 'Poland',
      x: 580,
      y: 320,
      color: '#0EA5E9',
      delay: 0.5,
    },
    {
      country: 'Spain',
      x: 380,
      y: 550,
      color: '#E87722',
      delay: 0.7,
    },
  ];

  return (
    <div className={`w-full h-full relative ${className}`}>
      {/* Base Europe Map from Wikimedia */}
      <div className="absolute inset-0">
        <Image
          src="/europe-map.svg"
          alt="Europe Map"
          fill
          className="object-contain opacity-15"
          priority
        />
      </div>

      {/* Overlay with animated markers and labels */}
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Country Markers */}
        {markers.map((marker, index) => (
          <motion.g
            key={marker.country}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: marker.delay }}
          >
            {/* Pulsing outer ring */}
            <motion.circle
              cx={marker.x}
              cy={marker.y}
              r="25"
              fill="none"
              stroke={marker.color}
              strokeWidth="3"
              opacity="0.4"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: marker.delay
              }}
            />

            {/* Main marker pin */}
            <motion.circle
              cx={marker.x}
              cy={marker.y}
              r="12"
              fill={marker.color}
              stroke="white"
              strokeWidth="4"
              filter="url(#glow)"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: marker.delay
              }}
            />

            {/* Inner dot */}
            <circle
              cx={marker.x}
              cy={marker.y}
              r="5"
              fill="white"
            />

            {/* Country Label */}
            <motion.g
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: marker.delay + 0.3 }}
            >
              {/* Label background */}
              <rect
                x={marker.x - 50}
                y={marker.y - 60}
                width="100"
                height="36"
                rx="8"
                fill="white"
                stroke={marker.color}
                strokeWidth="2.5"
                filter="url(#shadow)"
              />
              {/* Label text */}
              <text
                x={marker.x}
                y={marker.y - 35}
                textAnchor="middle"
                fill={marker.color}
                fontSize="20"
                fontWeight="bold"
                fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
              >
                {marker.country}
              </text>
            </motion.g>
          </motion.g>
        ))}

        {/* Connection Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* UK to Poland */}
          <motion.line
            x1={markers[0].x}
            y1={markers[0].y}
            x2={markers[1].x}
            y2={markers[1].y}
            stroke="#0EA5E9"
            strokeWidth="3"
            strokeDasharray="10,10"
            opacity="0.4"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Poland to Spain */}
          <motion.line
            x1={markers[1].x}
            y1={markers[1].y}
            x2={markers[2].x}
            y2={markers[2].y}
            stroke="#E87722"
            strokeWidth="3"
            strokeDasharray="10,10"
            opacity="0.4"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
          />

          {/* Spain to UK */}
          <motion.line
            x1={markers[2].x}
            y1={markers[2].y}
            x2={markers[0].x}
            y2={markers[0].y}
            stroke="#0EA5E9"
            strokeWidth="3"
            strokeDasharray="10,10"
            opacity="0.4"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
