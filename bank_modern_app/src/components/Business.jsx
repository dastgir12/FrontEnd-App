import React from 'react'
import { features } from '../constant'
import styles , { layout} from '../style'
import Button from './Button'

const FeatureCard = ({title , content , icon , index})=>(
<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card cursor-pointer`}>
  <div className={`${styles.flexCenter} w-[64px] h-[64px] bg-dimBlue`}>
    <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
  </div>
  <div className=' flex-1 flex flex-col ml-3'>
      <h4 className=' font-poppins font-semibold text-white text-[18px] leading-6 mb-1'>
        {title}
      </h4>
      <p  className=' font-poppins font-normal text-dimWhite text-[10px] leading-5 mb-1'>
        {content}
      </p>
    </div>
</div>
)


const Business = () => {
  return (
<section id='features' className={layout.section}>
<div className={layout.sectionInfo}>
<h2 className={styles.heading2 }>
  You do the Business <br className=' sm:block hidden' /> we will handle the money
</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam enim ipsa dolorum facere voluptates obcaecati nostrum eum accusantium quisquam. Ut beatae, aliquid enim sunt expedita obcaecati voluptatum cupiditate et?
</p>
<Button styles='mt-10'/>
</div>

<div className={`${layout.sectionImg} flex-col`}>
{
  features.map((feature , index)=>(
    <FeatureCard key={feature.id} {...feature} index = {index}/>
  ))
}
</div>
</section>
  )
}

export default Business
