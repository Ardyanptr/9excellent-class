"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "../component/AssetsComponent" 
import { students } from "../component/students";
import StudentCard from "../component/StudentCard";

const MemberSection = () => {
  return (
    <section id="member" className="py-24 bg-linear-to-b from-white to-blue-50">
      <motion.div
        className="text-center mb-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">ALL MEMBERS</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Member</h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
      </motion.div>

      <div className="flex justify-center items-center">
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {students.map((s, idx) => (
            <StudentCard key={idx} name={s.name} role={s.role} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemberSection