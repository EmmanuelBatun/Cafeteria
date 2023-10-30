import React from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import { motion } from "framer-motion"

import './Hero.css'
const Bounce = styled.div `animation: 2s ${keyframes`${bounce}`} infinite`;

const Hero = () => {
  return (

    <div className='hero-img'>
        <div className='container'>
        <div className='hero-content'>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
            >
            <h1 className='heading-primary'>
                <Bounce>Estacion Cafe</Bounce>
            </h1>

            <p className='text-white'>The best gourmet restaurant available in Manhatten</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>(555)123-4567</span>
            </p>
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero