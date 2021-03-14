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
            <a href="https://patience-creator.github.io/POCV/" target="_blank" >RESUMÉ</a> 
  
</div>
  </div>    
  </div>
    </header>
  );
};

export default Header;
