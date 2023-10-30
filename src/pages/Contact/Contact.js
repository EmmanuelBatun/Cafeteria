import React from 'react'

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/cheese2.jpg";
import CantactForm from './CantactForm/CantactForm'
import { motion } from "framer-motion";

const Contact = () => {
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
        heading={["contact ", <span>us</span>]}
        text="Feel free to contact with us"
      />
      <CantactForm />
      </motion.div>
    </div>
  )
}

export default Contact