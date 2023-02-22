import React from 'react'
import { clients } from '../constant'
import styles from '../style'
const Clients = () => {
  return (
<section className={`${styles.flexCenter} my-43`}>
  <div className={`${styles.flexCenter} w-full flex-wrap `}>
    {
      clients.map((i)=>(
        <div key={i.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[100px] `}>
        <img src={i.logo} alt="" className=' sm:w-[192px] w-[100px] object-contain' />
        </div>
      ))
    }
  </div>
</section>
  )
}

export default Clients
