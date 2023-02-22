import React from 'react'
import {apple , google , bill} from '../assets'
import styles , {layout} from '../style'
const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
<img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
<div className=' absolute z-[3] top-0 rounded-full -left-1/2  w-[50%] h-[50%] white__gradient '/>
<div className=' absolute z-0 bottom-0 rounded-full -left-1/2  w-[50%] h-[50%] pink__gradient '/>

</div>
<div className={layout.sectionInfo}>
<h2 className={styles.heading2}>
  Easily Control Your <br className='sm:block hidden' /> Billing And invoicing.
</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-4`}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem iure minus nostrum modi rerum dignissimos corrupti, quod, eius a ipsa voluptates nobis debitis aut. Natus doloremque corrupti commodi nobis?
</p>

<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
<img src={apple} alt="Apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
<img src={google} alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer' />

</div>
</div>
    </section>
  )
}

export default Billing
