"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import DecryptedText from "@/components/DecryptedText";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden rounded-xl border border-blue-300/60 bg-blue-500/5 backdrop-blur-md">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 background-white/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <FaStar className="text-white -600 background-transparent" />
            Where Excellence Meets Education
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src="/logo-bl.png"
              alt="9 Excellent Logo"
              width={520}
              height={520}
              className="ml-1 lg:ml-20 md:-ml-4"
              priority
            />
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <DecryptedText
              text="A class united by passion, driven by curiosity, and committed to achieving greatness together."
              speed={100}
              maxIterations={20}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
            />
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              whileInView="animate"
              viewport={{ once: true }}
            >
              Discover More
            </motion.a>
            <motion.a
              href="#features"
              className="px-8 py-4 border-2 border-blue-700 text-blue-700 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our Values
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;