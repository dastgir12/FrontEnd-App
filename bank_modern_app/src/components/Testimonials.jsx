import React from 'react'
import { feedback } from '../constant'
import FeedbackCard from './FeedbackCard'
import styles from '../style'
const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className=' absolute z-0 w-[60%] h-[50%] -right-[50%] rounded-full blue__gradient'/>
      <div className='flex md:flex-row flex-col w-full justify-between items-center sm:mb-16 mb-6 relative z-[1]'>
<h1 className={styles.heading2}>
  What people are <br className='sm:block hidden'/> think about us.
</h1>
    
      <div className=' w-full md:mt-0 mt-4'>
        <p className={`${styles.paragraph} w-[470px] text-left`}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsum porro quia rerum molestiae maiores perspiciatis officiis ullam officia facere, temporibus assumenda, obcaecati autem architecto a unde nemo. Voluptates, minus!
        </p>
      </div>
      </div>

      <div className=' w-full flex flex-wrap sm:justify-start justify-center feedback-container z-[1] relative'>
        {
          feedback.map((card)=>(
<FeedbackCard key={card.id} {...card}/>
          ))
        }

      </div>
    </section>
  )
}

export default Testimonials