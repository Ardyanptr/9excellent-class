"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent"
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

export default Footer