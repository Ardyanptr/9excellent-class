"use client"

import { FaUsers, FaTrophy, FaLightbulb, FaHeart, FaStar, FaBook } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../component/AssetsComponent";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import TextType from "@/components/TextType";

const FeaturesSection = () => {
  const features = [
    { icon: FaUsers, title: "Strong Unity", description: "We work together as one team, supporting each other through every challenge." },
    { icon: FaTrophy, title: "Academic Excellence", description: "Committed to achieving the highest standards in all our academic pursuits." },
    { icon: FaLightbulb, title: "Creative Thinking", description: "Encouraging innovative ideas and out-of-the-box solutions." },
    { icon: FaBook, title: "Love for Learning", description: "A genuine passion for knowledge and continuous self-improvement." },
    { icon: FaHeart, title: "Supportive Community", description: "Building lasting friendships and a caring classroom environment." },
    { icon: FaStar, title: "High Standards", description: "Setting and maintaining excellence in everything we do." }
  ];

  return (
    <section id="features" className="py-24 bg-linear-to-b from-blue-50 to-white">
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
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="text-black font-semibold flex items-center justify-center mb-10 -mt-10 text-center">
          <TextType 
            text={["A hub of innovation and curiosity, where every challenge becomes an opportunity to explore, create, and excel.", 
              "Fostering creativity, ambition, and collaboration – a journey of learning that sparks ideas and transforms dreams into reality.", 
              "Together we learn, together we grow, nurturing curiosity and building skills that go beyond the classroom."
            ]}
            typingSpeed={95}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        
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
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <div className="flex items-center mt-16 -mb-20 text-xl lg:text-5xl sm:text-3xl font-bold">
            <CountUp 
              from={0}
              to={29}
              separator="."
              direction="up"
              duration={2}
              className="count-up-text mr-3"
            />

            <h1 className="text-black">Students abroad</h1>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center mt-25 text-xl lg:text-5xl sm:text-3xl font-bold">
            <CountUp 
              from={0}
              to={1006}
              separator="."
              direction="up"
              duration={4}
              className="count-up-text mr-3"
            />

            <h1 className="text-black">Days since grade 7th</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection