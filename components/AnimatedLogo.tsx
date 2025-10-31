'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AnimatedLogo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Glow Effect Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isLoaded ? 0.6 : 0, scale: isLoaded ? 1 : 0.5 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-96 h-96 bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-orange)] rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
      </motion.div>

      {/* Left Part - Teal/Green */}
      <motion.div
        initial={{ x: -300, opacity: 0, rotate: -180 }}
        animate={{ x: isLoaded ? -100 : -300, opacity: isLoaded ? 1 : 0, rotate: isLoaded ? 0 : -180 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
        className="absolute z-10"
      >
        <motion.div
          animate={{
            x: [0, 100],
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(20, 184, 166, 0.5))",
              "drop-shadow(0 0 40px rgba(20, 184, 166, 0.8))",
              "drop-shadow(0 0 20px rgba(20, 184, 166, 0.5))"
            ]
          }}
          transition={{
            duration: 2,
            delay: 1.8,
            times: [0, 0.5, 1],
            type: "spring",
            stiffness: 100
          }}
        >
          <Image
            src="/logo.png"
            alt="Trade Link - Left Part"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48"
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
              filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.6))'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Right Part - Orange/Gold */}
      <motion.div
        initial={{ x: 300, opacity: 0, rotate: 180 }}
        animate={{ x: isLoaded ? 100 : 300, opacity: isLoaded ? 1 : 0, rotate: isLoaded ? 0 : 180 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
        className="absolute z-10"
      >
        <motion.div
          animate={{
            x: [0, -100],
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))",
              "drop-shadow(0 0 40px rgba(245, 158, 11, 0.8))",
              "drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))"
            ]
          }}
          transition={{
            duration: 2,
            delay: 1.8,
            times: [0, 0.5, 1],
            type: "spring",
            stiffness: 100
          }}
        >
          <Image
            src="/logo.png"
            alt="Trade Link - Right Part"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
              filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.6))'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Energy Burst Effect when merging */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 2]
        }}
        transition={{
          duration: 1,
          delay: 2.3,
          times: [0, 0.5, 1]
        }}
        className="absolute z-20"
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-[var(--primary-teal)] via-white to-[var(--accent-orange)] opacity-50 blur-xl"></div>
      </motion.div>

      {/* Sparkle particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.cos(i * 30 * Math.PI / 180) * 150],
            y: [0, Math.sin(i * 30 * Math.PI / 180) * 150],
          }}
          transition={{
            duration: 1.5,
            delay: 2.3 + (i * 0.05),
            ease: "easeOut"
          }}
          className="absolute z-15"
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: i % 2 === 0
                ? 'var(--primary-teal)'
                : 'var(--accent-orange)',
              boxShadow: i % 2 === 0
                ? '0 0 10px var(--glow-teal)'
                : '0 0 10px var(--glow-orange)'
            }}
          ></div>
        </motion.div>
      ))}

      {/* Text Animation - Trade Link */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute -bottom-16 md:-bottom-20 z-30"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="font-heading font-bold text-4xl md:text-6xl text-white text-center"
        >
          <span className="inline-block bg-gradient-to-r from-[var(--primary-teal-light)] to-[var(--primary-teal)] bg-clip-text text-transparent drop-shadow-lg">
            Trade
          </span>
          {" "}
          <span className="inline-block bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-orange-light)] bg-clip-text text-transparent drop-shadow-lg">
            Link
          </span>
        </motion.div>
      </motion.div>

      {/* Subtitle Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute -bottom-28 md:-bottom-32 z-30 text-center px-4"
      >
        <p className="text-white/90 text-sm md:text-lg font-medium tracking-wide">
          Connecting Global Commerce
        </p>
      </motion.div>

      {/* Orbiting particles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 3,
              delay: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'var(--primary-teal)' : 'var(--accent-orange)',
              transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(180px)`,
              boxShadow: i % 2 === 0
                ? '0 0 10px var(--glow-teal)'
                : '0 0 10px var(--glow-orange)'
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
