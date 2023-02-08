import React from "react";
import styles from "./style";
import {   
  NavBar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  HeroSection,
   } from "./components";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>navbar</div>
    </div>
        <NavBar/>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HeroSection />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing /> 
        <CardDeal /> 
        <Testimonials /> 
        <Clients /> 
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;