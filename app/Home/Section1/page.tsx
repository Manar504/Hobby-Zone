"use client"
import React, { useEffect } from 'react' 
import "./Section1.css" 
import Image from 'next/image';
import Illustration from "../../../public/Assets/section1/Illustration (1).svg"
import Illustration_2 from "../../../public/Assets/section1/Illustration (2).svg"
import Frame from "../../../public/Assets/section1/Frame.svg"
import Link from 'next/link';
import { motion , AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import AOS from "aos";
const fadeInAnimationVariants = { 
  inital:{
    opacity:0,
    y:100,
  },  
  animate:{
    opacity:100,
    y:0,
    transtion:{
    delay: 50,

    }
  }

  
}

const Section1 = () => {
  const { scrollYProgress } = useViewportScroll()
// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
useEffect(() => {
    
  
  AOS.init({duration:2000})
}, [

])
  return (
    
    <div 
    // variants={fadeInAnimationVariants}
    // initial="inital"
    // whileInView="animate"
    // viewport={{once:true}}
    // transition={{ delay: 0.7 }}
    
   
    className='container'> 
    <br/><br/> 
    <div className='row' > 
    
        <div className="col text-center p-40"> 
        <h1 className='Text' data-aos={"fade-up"}>Choose the learning category you need</h1> <br/> 
        <p className='Text'>Cupcake danish tiramisu powder soda ginger cake 
            Dessert carrot <br/> cake tartsweet marzipan for fruitcake <br/></p> 
        </div> 
        <br/><br/><br/><br/><br/><br/><br/><br/>
    </div> 
    <div className='row p-10'>
      <div className='col right  d-flex align-items-center ' data-aos={"fade-right"}> 
      <div className='col'>
      <h3 className='col Text'>Programming</h3> <br/>
      <p className='col Text'>Muffin lemon drops toffee <br/>
roll brownie jelly beans <br/>
Croissant chocolate cake too <br/></p> 
<Link href={"#"}><h5 className='Text'>Learn more <Image className='Text' src={Frame} alt='Frame' width={20} height={20}></Image> </h5> </Link> 
           </div> 
        <Image className='ms-auto' src={Illustration} alt='dks'></Image>
      </div>
      <div className='col left   d-flex align-items-center  '  data-aos={"fade-left"}> 
       <div className=''>
      <h3 className='col Text'>Graphic Design</h3>
      <p className='col Text'>Muffin lemon drops toffee <br/>Croissant chocolate cake tootsie roll
           Cupcake sugar<br/></p> 
           <Link href={"#"}><h5 className='Text'>Learn more <Image src={Frame} alt='Frame' width={20} height={20}></Image> </h5> </Link>
           </div> 
          
      
      <Image className='ms-auto' src={Illustration_2} alt='dks'></Image> 
      
        </div>  
        
      </div>  
      <br/><br/><br/><br/><br/>
    </div>
    
  )
}

export default Section1;
