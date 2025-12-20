"use client"

import { fadeInUp, 
    images, 
    transformStyles, 
    breakpointColumnsObj, 
    masonry_items,
    techLogos
} from "../component/AssetsComponent";

import { motion } from "framer-motion";
import Image from "next/image";
import Masonry from "react-masonry-css";
import BounceCards from "@/components/BounceCards";
import LogoLoop from "@/components/LogoLoop";

const ActivitiesSection = () => {
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
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
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
          className="flex w-auto gap-4 mt-10"
          columnClassName="masonry-column"
        >
          {masonry_items.map((item, i) => (
            <div key={i} className="mb-4 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt="img"
                width={500}
                height={item.height}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full object-cover"
                quality={75}
              />
            </div>
          ))}
        </Masonry>
        
        <div className="flex flex-col items-center justify-center mt-10 pt-10 -mb-20" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
          <p className="mb-6 text-center text-lg font-medium">Technology I used</p>
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

export default ActivitiesSection