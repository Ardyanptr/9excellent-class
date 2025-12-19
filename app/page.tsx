"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaTrophy, FaLightbulb, FaHeart, FaStar, FaBook, FaRocket, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import Aurora from './component/Aurora';
import BounceCards from "./component/BounceCards";
import DecryptedText from "./component/DecryptedText";
import LogoLoop from "./component/LogoLoop";
import Masonry from "react-masonry-css";

import Loader from './loader'

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  748: 2,
  480: 1
};

const items = [
  { image: "/images/1.jfif", height: 200 },
  { image: "/images/2.jpg",  height: 300 },
  { image: "/images/3.jpg",  height: 300 },
  { image: "/images/4.jpg", height: 200 },
  { image: "/images/5.jfif",  height: 300 },
  { image: "/images/6.jpg",  height: 300 },
  { image: "/images/7.jpg", height: 500 },
  { image: "/images/8.jpg",  height: 300 },
  { image: "/images/9.jpg",  height: 400 },
  { image: "/images/10.jpg", height: 200 },
  { image: "/images/11.jpg",  height: 300 },
  { image: "/images/12.jpg",  height: 300 },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const images = [
  "/images/1.jfif",
  "/images/2.JPG",
  "/images/3.JPG",
  "/images/4.JPG",
  "/images/5.jfif"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={scrolled ? "/logo-bl.png" : "/logo-wt.png"}
              alt="9 Excellent Logo"
              width={220}
              height={220}
              className="ml-1 lg:-ml-10 md:-ml-4"
              priority
            />
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {["About", "Features", "Activities", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-gray-600" : "text-white hover:text-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
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
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent"
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

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
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
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-lg"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white"
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
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: FaUsers, title: "Strong Unity", description: "We work together as one team, supporting each other through every challenge." },
    { icon: FaTrophy, title: "Academic Excellence", description: "Committed to achieving the highest standards in all our academic pursuits." },
    { icon: FaLightbulb, title: "Creative Thinking", description: "Encouraging innovative ideas and out-of-the-box solutions." },
    { icon: FaBook, title: "Love for Learning", description: "A genuine passion for knowledge and continuous self-improvement." },
    { icon: FaHeart, title: "Supportive Community", description: "Building lasting friendships and a caring classroom environment." },
    { icon: FaStar, title: "High Standards", description: "Setting and maintaining excellence in everything we do." }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What Makes Us Special</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  const activities = [
    { title: "Academic Competitions", description: "Participating in various academic olympiads and competitions", color: "from-blue-500 to-blue-600" },
    { title: "Sports & Fitness", description: "Regular sports activities promoting teamwork and health", color: "from-green-500 to-green-600" },
    { title: "Cultural Events", description: "Celebrating diversity through performances and festivals", color: "from-purple-500 to-purple-600" },
    { title: "Community Service", description: "Giving back to society through volunteer programs", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Memories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Photos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center items-center">
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>

        <Masonry 
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4"
          columnClassName="masonry-column"
        >
          {items.map((item, i) => (
            <div key={i} className="mb-4 rounded-lg overflow-hidden">
              <img src={item.image} className="w-full object-cover" loading="lazy" style={{ height: `${item.height}px`, display: 'block' }}/>
            </div>
          ))}
        </Masonry>
        
        <div className="flex justify-center mt-10 pt-10 -mb-40" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="right"
            logoHeight={48}
            gap={40}
            hoverSpeed={150}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology I used"
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <FaEnvelope className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">ardyanpersonal@gmail.com</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Building A. Second Story, Room 9E</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <FaPhone className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
            <p className="text-gray-600">+62 895 0636 1240</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center">
              <Image
                src="/logo-wt.png"
                alt="9 Excellent Logo"
                width={220}
                height={220}
                className="ml-1 lg:-ml-10 md:-ml-4"
                priority
              />
            </div>
          </motion.h3>
          <p className="text-gray-400 mb-6">Excellence is not a destination, it is a continuous journey.</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()}Made with ❤️ on Indonesia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onLoaded={() => setLoaded(true)} />}
        {loaded && (
          <main className="relative overflow-x-hidden">

          <div className="fixed inset-0 -z-10">
            <Aurora
              colorStops={["#00b4d8", "#48cae4", "#caf0f8"]}
              blend={0.6}
              amplitude={0.5}
              speed={0.6}
            />
          </div>
          
          <Navbar />
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <ActivitiesSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
