import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import meisje from "../images/meisje1.jpg"
import net  from "../images/net.png"
import ama from "../images/ama.jpeg"
import gg from "../images/gg.jpeg"
import mem from "../images/mem.jpeg"
import beach from "../images/beach.png"
import {FaEye} from "react-icons/fa";
export default function works() {
    return (
      <div className="wrapper">
       <div className="item">
       
       <div className="polaroid"><img className="popo"src=
       
              {meisje} />  
        <a className='polo__title' href="https://github.com/Patience-creator/airbnb-clone" target="_blank">  <FaGithub/> 
       <span className="caption"> View code</span> </a> <a href="https://airbnb-clone-pied.vercel.app" target="_blank" className= "polo__title caption"><FaEye/> View site</a> 
        <p className="para"> REACT  </p>
      </div>
 
       
        </div>  
  
     <div className="item">
    
       <div className="polaroid"><img  className="popo" src=
      
    {net} />
      <a className='polo__title' href="https://github.com/Patience-creator/Netflix-clone" target="_blank">  <FaGithub/> 
     <span className="caption"> View code</span> </a> <a href="https://netflix-clone-dbgvvskv8.vercel.app" target="_blank" className= "polo__title caption"><FaEye/> View site</a> 
   <p className="para"> REACT JS, CSS, API   </p>
      </div>
   
    </div>
    
    <div className="item">
    
     <div className="polaroid"><img  className="popo" src=
      
      {ama} />
      
       <a className='polo__title' href="https://github.com/Patience-creator/amazon-clone" target="_blank">  <FaGithub/> 
      <span className="caption"> View code</span> </a> <a href="#" target="_blank" className= "polo__title caption"><FaEye/> View site</a> 
       <p className="para"> REACT JS, CSS   </p>
      </div>
    
     </div>
     <div className="item">
     
      <div className="polaroid"><img  className="popo" src=
       
       {gg} />
        
        <a className='polo__title' href="https://github.com/Patience-creator/adviceapp" target="_blank">  <FaGithub/> 
      <span className="caption"> View code</span> </a> <a href="https://adviceapp.vercel.app" target="_blank" className= "polo__title caption"><FaEye/> View site</a> 
      <p className="para"> REACT JS, CSS, API</p>
      </div>
    
     </div>
     <div className="item">
       
       <div className="polaroid"><img  className="popo" src=
       
      {mem} />
       <a className='polo__title' href="https://github.com/Patience-creator/update-memorygame" target="_blank">  <FaGithub/> 
      <span className="caption"> View code</span> </a> <a href="https://patience-creator.github.io/update-memorygame/" target="_blank" className= "polo__title caption"><FaEye/> View site</a> 
   <p className="para"> HTML, CSS, JS  </p>
       </div>
    
    </div>
     <div className="item">
   
       <div className="polaroid"><img  className="popo" src=
      
        {beach} />
      <a className='polo__title' href="https://github.com/Patience-creator/loadedsounds" target="_blank">  <FaGithub/> 
      <span className="caption"> View code</span> </a> <a href="https://patience-creator.github.io/loadedsounds/" target="_blank" className= "polo__title caption"><FaEye/> View site</a> 
   <p className="para"> HTML, CSS, BOOTSTRAP,JQUARY, GSAP </p>
       </div>
       </div>
       </div>  
      
    )
 }



   