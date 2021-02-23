import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
//  import "./Home.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className="container">
        <div className="firstpagecont row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height
              }}
            >
              <div className="frame">
                <span className="homeimgtext">
                  Click me <br />
                  to continue
                </span>
                <Link to={`/model/patienceora`}>
                  <ProgressiveImage
                    src={require("../images/patienceora.jpg")}
                    placeholder={require("../images/patienceoracompressed.jpg")}
                  >
                    {src => (
                      <motion.img
                        src={src}
                        alt="Patience Ora"
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
          </div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={transition}
            className="information">
          
            <FaHtml5 /> <FaCss3 /> <FaBootstrap />
            <FaSass /> <FaReact /> <FaJs /> 
          </motion.div>
        </div>
        
      </div>
    </main>
  </>
);

export default Home;
