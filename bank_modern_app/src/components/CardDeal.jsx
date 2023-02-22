import React from 'react'
import { card } from '../assets'
import styles , {layout} from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
<section className={layout.section}>
  <div className={layout.sectionInfo}>
<h2 className={styles.heading2}>
  Find a better card deal in <br className='sm:block hidden'/> few easy steps.
</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati commodi labore illum aliquam? Quam, fuga vero? Necessitatibus repudiandae eveniet illo, ad incidunt facilis omnis placeat iste consectetur delectus tempora laborum?
</p>

<Button styles='mt-10'/>
  </div>

  <div className={layout.sectionImg}>
    <img src={card} alt=""  className='w-[100%] h-[100%]'/>
  </div>
</section>
  )
}

export default CardDeal
