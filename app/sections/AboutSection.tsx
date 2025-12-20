"use client"

import { FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../component/AssetsComponent";
import CurvedLoop from "@/components/CurvedLoop";
import ScrollFloat from "@/components/ScrollFloat";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="flex justify-center items-center text-black w-full h-120 mb-30">
        <CurvedLoop
          marqueeText="Creative ✦ With ✦ Nine ✦ Excellent ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="text-black"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Who We Are</h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-linear-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-lg"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="relative bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white"
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <FaGraduationCap className="text-6xl mb-4 opacity-80" />
                <Image
                  src="/logo-wt.png"
                  alt="9 Excellent Logo"
                  width={220}
                  height={520}
                  className="ml-1 mb-3"
                  priority
                />
                <p className="text-blue-100 text-lg leading-relaxed">
                  We are more than just a class - we are a family of ambitious learners, creative thinkers, and future leaders.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex gap-4 p-4 rounded-xl group hover:bg-blue-50 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                <FaLightbulb className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Our Vision</h4>
                <p className="text-gray-600">To create an environment where every student can thrive, learn, and grow to their fullest potential.</p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex gap-4 p-4 rounded-xl group hover:bg-blue-50 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                <FaLightbulb className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Our Mission</h4>
                <p className="text-gray-600">Fostering collaboration, creativity, and academic excellence while building lasting friendships.</p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex gap-4 p-4 rounded-xl group hover:bg-blue-50 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                <FaLightbulb className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Our Goal</h4>
                <p className="text-gray-600">Empowering each member to achieve personal and academic success through teamwork and dedication.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 w-full text-center font-semibold">
          <ScrollFloat 
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="text-sm"
          >
            Keep scrolling and discover the amazing projects we've built together — every idea     tells a story.
          </ScrollFloat>
        </div>
      </div>
    </section>
  );
}

export default AboutSection