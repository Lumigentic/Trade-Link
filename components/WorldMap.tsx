'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WorldMapProps {
  highlightCountries?: boolean;
  className?: string;
}

export default function WorldMap({ highlightCountries = true, className = '' }: WorldMapProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <svg
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1C355E" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E87722" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* World continents - simplified shapes */}
        <g id="world" fill="url(#mapGradient)" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3">
          {/* North America */}
          <path d="M50,80 L180,60 L220,100 L250,140 L240,180 L200,200 L150,190 L100,170 L60,140 Z" />
          <path d="M200,200 L230,240 L210,280 L180,260 Z" />

          {/* South America */}
          <path d="M220,310 L250,320 L270,380 L260,450 L240,480 L220,470 L210,420 L200,360 Z" />

          {/* Europe */}
          <path d="M480,80 L520,70 L560,90 L590,110 L580,140 L550,150 L510,145 L490,120 Z" />

          {/* Africa */}
          <path d="M480,160 L520,165 L550,180 L570,220 L580,280 L570,340 L550,380 L520,400 L490,390 L470,350 L460,300 L465,240 L475,200 Z" />

          {/* Asia */}
          <path d="M600,60 L680,50 L760,60 L840,80 L900,100 L940,130 L950,170 L940,210 L920,240 L880,260 L840,270 L800,265 L760,250 L720,230 L680,200 L650,170 L620,140 L600,100 Z" />
          <path d="M700,280 L740,290 L780,310 L800,340 L790,370 L760,380 L720,370 L690,350 L680,320 Z" />

          {/* Australia */}
          <path d="M880,380 L920,375 L960,385 L980,410 L970,440 L940,455 L900,450 L870,430 L865,400 Z" />

          {/* Antarctica */}
          <path d="M200,540 L400,535 L600,530 L800,535 L1000,540 L950,570 L700,580 L450,575 L250,570 Z" opacity="0.2" />
        </g>

        {/* Highlighted countries */}
        {highlightCountries && (
          <g id="highlighted-countries">
            {/* United Kingdom */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.path
                d="M490,95 L500,90 L510,95 L512,105 L508,115 L500,118 L492,115 L488,105 Z"
                fill="url(#highlightGradient)"
                stroke="#E87722"
                strokeWidth="2"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Pin marker */}
              <motion.circle
                cx="500"
                cy="105"
                r="8"
                fill="#E87722"
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx="500"
                cy="105"
                r="15"
                fill="none"
                stroke="#E87722"
                strokeWidth="2"
                opacity="0.5"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <text x="500" y="85" textAnchor="middle" fill="#1C355E" fontSize="14" fontWeight="bold">UK</text>
            </motion.g>

            {/* Poland */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.path
                d="M560,100 L575,98 L585,105 L583,115 L575,120 L562,118 L555,110 Z"
                fill="url(#highlightGradient)"
                stroke="#0EA5E9"
                strokeWidth="2"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              {/* Pin marker */}
              <motion.circle
                cx="570"
                cy="109"
                r="8"
                fill="#0EA5E9"
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              <motion.circle
                cx="570"
                cy="109"
                r="15"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="2"
                opacity="0.5"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              <text x="570" y="90" textAnchor="middle" fill="#1C355E" fontSize="14" fontWeight="bold">Poland</text>
            </motion.g>

            {/* Spain */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.path
                d="M475,135 L500,132 L515,140 L510,155 L495,160 L475,157 L468,145 Z"
                fill="url(#highlightGradient)"
                stroke="#E87722"
                strokeWidth="2"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              {/* Pin marker */}
              <motion.circle
                cx="490"
                cy="145"
                r="8"
                fill="#E87722"
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
              <motion.circle
                cx="490"
                cy="145"
                r="15"
                fill="none"
                stroke="#E87722"
                strokeWidth="2"
                opacity="0.5"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
              <text x="490" y="175" textAnchor="middle" fill="#1C355E" fontSize="14" fontWeight="bold">Spain</text>
            </motion.g>

            {/* Connection lines */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* UK to Poland */}
              <motion.line
                x1="500"
                y1="105"
                x2="570"
                y2="109"
                stroke="#0EA5E9"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
                opacity="0.4"
              />
              {/* Poland to Spain */}
              <motion.line
                x1="570"
                y1="109"
                x2="490"
                y2="145"
                stroke="#E87722"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                opacity="0.4"
              />
              {/* Spain to UK */}
              <motion.line
                x1="490"
                y1="145"
                x2="500"
                y2="105"
                stroke="#0EA5E9"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 }}
                opacity="0.4"
              />
            </motion.g>
          </g>
        )}

        {/* Grid overlay */}
        <g opacity="0.05">
          {/* Latitude lines */}
          {[...Array(12)].map((_, i) => (
            <line
              key={`lat-${i}`}
              x1="0"
              y1={i * 50}
              x2="1200"
              y2={i * 50}
              stroke="#0EA5E9"
              strokeWidth="0.5"
            />
          ))}
          {/* Longitude lines */}
          {[...Array(24)].map((_, i) => (
            <line
              key={`long-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="600"
              stroke="#0EA5E9"
              strokeWidth="0.5"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
