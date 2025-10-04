"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",      // English
  "Bonjour",    // French
  "Ciao",       // Italian
  "Hallo",      // German
  "مرحبا",     // Arabic
  "Hola",       // Spanish
  "你好",       // Chinese
  "नमस्ते",    // Hindi
  "Olá",        // Portuguese
  "ہیلو",       // Urdu
];

const Loader = () => {
  const [index, setIndex] = useState(0);

  // // Cycle every 500ms
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % greetings.length);
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen " style={{marginTop : "190px"}}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={greetings[index]}
          className="text-5xl md:text-7xl font-bold leading-tight text-center text-black"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Hello
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Loader;
