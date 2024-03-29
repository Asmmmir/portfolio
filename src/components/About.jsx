import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

        <div
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('','',0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I'm Aslanbek, a frontend developer with over 2 years of experience. I'm passionate about creating user-friendly and visually appealing websites, and I specialize in using HTML, CSS, JavaScript, React, Redux, and TypeScript. My expertise allows me to craft seamless and responsive web experiences. Staying current with the latest industry trends and technologies is essential to me, ensuring that the projects I work on are cutting-edge. I'm dedicated to writing clean and efficient code, and I love turning creative concepts into captivating digital realities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,'about');
