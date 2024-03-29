import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const FetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary flex-col w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className=" font-poppins leading-[23px] font-medium text-[18px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" />
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className=" font-poppins leading-[23px] font-medium text-[18px] mr-2">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FetStarted;
