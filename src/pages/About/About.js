import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";

import AboutInfo from './AboutInfo/AboutInfo'
import OurData from './OurData/OurData'
import Gallery from './Gallery/Gallery'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 5, scale: 1 }}
       transition={{
         duration: 0.9,
         delay: 0.3,
         ease: [0, 0.80, 0.2, 1.01]
        }}
            >
      <HeroImage
        bgImage={bgImage}
        heading={["about us ", <span className="ampersand"> & </span>, " photo gallery"]}
        text="Take a look at the place, the people and the food…"
      />
      <AboutInfo />
      <OurData />
      <Gallery />
      </motion.div>
    </div>
  );
};

export default About;
