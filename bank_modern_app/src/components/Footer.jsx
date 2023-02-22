import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constant";
import { logo } from "../assets";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}  flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className="flex flex-1 flex-col mr-10 justify-start">
          <img
            src={logo}
            alt="logo"
            className="w-[230px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-5 max-w-[310px]`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            deleniti est? Aliquid ipsum reprehenderit aspernatur quis illum,
            debitis molestias perferendis nobis, tempore corporis hic quas
            accusantium sequi! Facere, distinctio est?
          </p>
        </div>
        <div className="flex flex-row flex-[1.5] w-full justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((i) => (
            <div
              key={i.key}
              className=" flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-dimWhite">
                {i.title}
              </h4>
              <ul className="mt-4">
                {i.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`${
                      index !== i.links.length - 1 ? "mb-4" : "mb-0"
                    } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          2022 Hoobank! All rights reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {
            socialMedia.map((social , index)=>(
              <img key={social.id} src={social.icon} alt="icon"  className={`w-[22px] h-[22px] object-contain cursor-pointer ${index!== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Footer;
