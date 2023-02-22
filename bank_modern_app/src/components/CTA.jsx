import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px]`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Lets try our service now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-[5]`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quo perspiciatis temporibus impedit possimus, ipsum optio iusto officiis atque officia, mollitia obcaecati asperiores provident ullam dignissimos eum incidunt ab consectetur.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
