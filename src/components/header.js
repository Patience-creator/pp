import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>PATIENCE ORA</Link>
          </div>
           <div className='menu' 
            >
            <a href="https://s3.amazonaws.com/archivos-cvonline/assets/pdf/890771/BlackProfessionalResume-5.pdf" target="_blank" >RESUMÉ</a> 
  
</div>
  </div>    
  </div>
    </header>
  );
};

export default Header;
