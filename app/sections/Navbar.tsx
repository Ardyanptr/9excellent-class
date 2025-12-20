"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
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
            {["About", "Features", "Photos", "Contact"].map((item) => (
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

export default Navbar