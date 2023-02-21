import React from 'react'
import { stats } from '../constant'
import styles from '../style'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 m-3 flex justify-start items-center flex-row`}>
        <h1 className=" font-poppins font-semibold xs:leading-[54px] text-[40px] xs:text-[45px] leading-[43px] text-white">
          {stat.value}
        </h1>
        <p className=" font-poppins font-normal xs:leading-[26px] text-[15px] xs:text-[20px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
      </div>
    ))}
  </section>
  )
}

export default Stats