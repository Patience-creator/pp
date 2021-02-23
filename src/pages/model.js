import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "./useWindowSize";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import Texttitle from "./Texttitle.js";
import Works from "./Works.js";
// import Ex from "./Ex.js";
// import Front from "./Front";
// import Love from "./Love";
//Components
import ScrollForMore from "../components/scrollForMore";
 import "./layout.css";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  // initial: {
  //   y: 0,
  // },
  animate: {
    // y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  // initial: {
  //   y: 0,
  // },
  animate: {
    // y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const windowSize = useWindowSize();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]); 
 

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Front-End Developer In Belgium </span>
                
            
              </div>
              {/* social handles github/linkedin links */}
             <div className="mua"> 
             <a className='social__gh' href="https://github.com/Patience-creator" target="_blank">  <FaGithub/> </a>
             <a className='social__link' href="https://www.linkedin.com/in/patience-ora-55b05518b/" target="_blank">  <FaLinkedin/>  </a>
             </div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span  className='second' variants={letter}>P</motion.span>
                <motion.span  className='second' variants={letter}>a</motion.span>
                <motion.span  className='second' variants={letter}>t</motion.span>
                <motion.span  className='second' variants={letter}>i</motion.span>
                <motion.span  className='second' variants={letter}>e</motion.span>
                <motion.span  className='second' variants={letter}>n</motion.span>
                <motion.span  className='second' variants={letter}>c</motion.span>
                <motion.span  className='second' variants={letter}>e</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{  
                  y: 0,
                  width: "100%",
                  // resize hook needs to be put here.
                  // useWindowSize code will go here
                  height: useWindowSize
                  > 1024 ? 800 : 600,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/patienceor.jpeg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: {useWindowSize}
                      > 1440 ? -1200 : -600,
                      
                     
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
          
        </div>
      </div>
      <Texttitle/>
        <Works/>  
        
      {/* <Ex/> */}
      {/* <Front/> */}
      {/* <Love/> */}
</motion.div>
  );
};


export default Model;
