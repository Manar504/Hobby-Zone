"use client"

import React from 'react' 
import  unsplash_YQQMGoOix4c from "../../../public/Assets/course image/unsplash_YQQMGoOix4c.png"
import Image, { StaticImageData } from 'next/image'; 
import DeafultButton from '../DeafultButton/DeafultButton';

type CardProps = {
  Image : StaticImageData ;
  title : string ;
  pra:string;
  

}

const Card = (props:CardProps) => { 


  return (
    <div>
       <div className="card">
  <Image src={props.Image} className="card-img-top" alt="Fissure in Sandstone" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.pra}</p>
   <DeafultButton bg="#2945FF" text="Join Class" width="200px"  handleClick={(e)=>{e.preventDefault();
      console.log("manar")}} />
  </div>
    </div> 
    </div>
    
  )
}

export default Card;
