"use client"
import "./Hero.css" 
import Image from 'next/image'; 
import Illustration from "../../../Assets/Hero/Illustration.svg" 
import DeafultButton from "../../Components/DeafultButton/DeafultButton"



const Hero = () => {
  return (
    <div className=" container-fluid Hero p-5">  
     <div className="row title text-white m-auto">
      <div className=" col-6  ">
        <h1>  Learn New Course Gain More Skills </h1>
<p>Explore Indonsias ground-breaking research and education
now.Watch this space,as eligible courses will continue to be
added as they become available</p>  
<form className="search">
        <input className="form-control me-sm-2 px-5 rounded-5 w-50" type="text" placeholder="Enter your email adress" />
      </form>  
      <DeafultButton bg="#2945FF" text="Join Class" width="25%" handleClick={(e)=>{e.preventDefault();
      console.log("manar")}} />
         </div>
      
       <div className="mainImg text-center order-first order-lg-last col-lg-6 col-sm-12 "> 
    <Image  src={Illustration} alt="hero"></Image> 
    
    </div> 
  
       

     </div> 
    
    
      
    </div>
  )
}

export default Hero
