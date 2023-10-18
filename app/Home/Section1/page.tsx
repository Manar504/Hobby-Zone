import React from 'react' 
import "./Section1.css" 
import Image from 'next/image';
import Illustration from "../../../public/Assets/section1/Illustration (1).svg"
import Illustration_2 from "../../../public/Assets/section1/Illustration (2).svg"
import Frame from "../../../public/Assets/section1/Frame.svg"
import Link from 'next/link';

const Section1 = () => {
  return (
    
    <div className='container'> 
    <br/><br/> 
    <div className='row'> 
    
        <div className="col text-center p-40"> 
        <h1 className='Text'>Choose the learning category you need</h1> <br/> 
        <p className='Text'>Cupcake danish tiramisu powder soda ginger cake 
            Dessert carrot <br/> cake tartsweet marzipan for fruitcake <br/></p> 
        </div> 
        <br/><br/><br/><br/><br/><br/><br/><br/>
    </div> 
    <div className='row p-10'>
      <div className='col right  p-40 d-flex align-items-center '> 
      <div className='col'>
      <h3 className='col Text'>Programming</h3> <br/>
      <p className='col Text'>Muffin lemon drops toffee <br/>
roll brownie jelly beans <br/>
Croissant chocolate cake too <br/></p> 
<Link href={"#"}><h5 className='Text'>Learn more <Image className='Text' src={Frame} alt='Frame' width={20} height={20}></Image> </h5> </Link> 
           </div> 
        <Image className='ms-auto' src={Illustration} alt='dks'></Image>
      </div>
      <div className='col left  p-40 d-flex align-items-center  '> 
       <div className='col'>
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
