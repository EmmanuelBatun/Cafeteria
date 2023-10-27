import React from 'react'
import Hero from './Hero/Hero'
import AmazingMeal from './AmazingMeal/AmazingMeal'
import OurChef from './OurChef/OurChef'
import '../../components/HeroImage/HeroImage.css'

const Home = () => {
  return (
    <div className='color'>
      <Hero />
      <AmazingMeal />
      <OurChef />
    </div>
  )
}

export default Home