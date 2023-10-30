import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/coffee.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/Breakfast'
import LunchTime from "./LunchTime/LunchTime";
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";

const Menu = () => {
 
  return (
    <div>
      <Navbar></Navbar>
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
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuOfTheDay />
      <Breakfast />
      <LunchTime />
      <CoffeeSelection />
      <Beverages />
      </motion.div>
    </div>
  );
};

export default Menu;
