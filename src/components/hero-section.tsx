"use client";

import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 md:px-6">
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <motion.span 
            className="block mb-2 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm
          </motion.span>
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Naga Abhigna Gunda
          </motion.span>
        </h1>
        <motion.p 
          className="max-w-2xl mx-auto text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Master’s in Computer Science graduate specializing in Data Science and Machine Learning. Passionate about building intelligent applications that solve real-world problems.
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button asChild size="lg">
            <Link href="#about">About me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://drive.google.com/file/d/17McH-XCiYsjCvn2Slv0b7FmH24PLV44o/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV <ArrowDown className="ml-2 h-4 w-4" /></a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
