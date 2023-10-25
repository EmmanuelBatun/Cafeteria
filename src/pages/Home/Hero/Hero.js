import React from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'

import './Hero.css'

const Bounce = styled.div `animation: 2s ${keyframes`${bounce}`} infinite`;

const Hero = () => {
  return (
    <div className='hero-img'>
        <div className='container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <Bounce>welcome to restaurant</Bounce>
            </h1>

            <p className='text-white'>The best gourmet restaurant available in Manhatten</p>

            <p className='text-white'>
                Book online or call <span className='special-word'>(555)123-4567</span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Hero