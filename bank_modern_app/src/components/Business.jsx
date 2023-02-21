import React from 'react'
import { features } from '../constant'
import styles , { layout} from '../style'
import Button from './Button'
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
</section>
  )
}

export default Business
