import React from 'react'
import { discount , } from '../assets'
import styles from '../style'
const HeroSection = () => { 
    <section id='home' className = {`flex md:flex-row flex-col ${styles.paddingy}`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl-px:0 sm:px-16 px-6`}>
    
    <div>
      <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
      <span className='text-white'>20%</span>
      <span className='text-white'>1 Month</span>
    </div>
  </div>
    </section>
}

export default HeroSection