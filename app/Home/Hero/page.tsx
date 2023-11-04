"use client"
import "./Hero.css" 
import Image from 'next/image'; 
import Illustration from "../../../Assets/Hero/Illustration.svg" 
import DeafultButton from "../../Components/DeafultButton/DeafultButton"



const Hero = () => {
  return (
    <div className=" container-fluid p-5  Hero ">  
     <div className="row  text-white ">
      <div className=" content  col">
        <p className="h1">  Learn New Course Gain More Skills </p>
      <p>Explore Indonsias ground-breaking research and education
      now.Watch this space,as eligible courses will continue to be
      added as they become available</p>  
      <form >
        <input className="input-email-data  form-control px-3  rounded-5" type="text" placeholder="Enter your email adress" />
      </form>  
      <DeafultButton   text="Join Class" width="200px"  handleClick={(e)=>{e.preventDefault();
      console.log("manar")}} />
         </div>
      
      <div className="mainImg  text-center col-md-6  
      order-first order-md-last
       "> 
    <Image  src={Illustration}  className="hero-image" alt="hero"></Image> 
    
    </div> 
  
       

     </div> 
    
    
      
    </div>
  )
}

export default Hero
