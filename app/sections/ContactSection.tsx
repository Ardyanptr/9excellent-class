"use client"

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../component/AssetsComponent";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-linear-to-b from-white to-blue-50">
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
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
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

export default ContactSection