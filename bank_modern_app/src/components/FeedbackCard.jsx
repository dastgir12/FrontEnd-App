import React from "react";
import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card my-5">
      <img
        src={quotes}
        alt="quotes"
        className="max-w-[47px] h-[27px] object-contain "
      />
      <p className=" font-poppins font-normal text-[18px] my-10 leading-[32px] text-white">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt="name" className="w-[47px] h-[47px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
