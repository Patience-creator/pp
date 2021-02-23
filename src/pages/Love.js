import React from 'react'
import "./Love.css";
import meisje from "../images/meisje1.jpg"
function Love() {
    return (
        <div>
  <title>Styling Images As Polaroids</title>
  {/*Google Font*/}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
  {/*Stylesheet*/}
  {/* <link rel="stylesheet" href="style.css" /> */}
  <figure>
 <img src=
   {meisje} />  
 {/* alt="my_photo" />  */}
    <figcaption>A Wonderful Day</figcaption>
  </figure>
</div>




    )
}

export default Love
