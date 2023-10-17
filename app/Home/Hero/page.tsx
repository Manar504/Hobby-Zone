"use client"
import "./Hero.css" 
import Image from 'next/image'; 
import Illustration from "../../../Assets/Hero/Illustration.svg" 



const Hero = () => {
  return (
    <div className=" container-fluid Hero d-flex align-items-center">  
     <div className="title container text-white">
      <h1>Let's Learn New Course Gain More Skills </h1>
       
       <p>Explore Indonesia's ground-breaking research and education
now.Watch this space,as eligible courses will continue to be
added as they become available</p>  
<form className="search">
        <input className="form-control me-sm-2 px-5 rounded-5" type="text" placeholder="Enter your email adress" />
      </form> 
     </div> 
    
    <div className="mainImg container ms-auto "> 
    <Image  src={Illustration} alt="hero"></Image> 
    
    </div> 
  
      
    </div>
  )
}

export default Hero
