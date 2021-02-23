import React from "react";


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.2, ...transition },
      }}
      className='scroll-for-more'>

      <div className='text'>
        Click <br />
        for more
      </div>
    </motion.div>
  );




export default ClickForMore;
