"use client"

import React from 'react' ;
import Card from '../Components/Card/Card';
import Image from 'next/image'; 
import Rectangle_180 from  "../../public/Assets/course image/Rectangle 180.png";
import "./courses.css"; 
import  course_imagex from "../../public/Assets/course image/course image@3x.png";
import  pexels_anna from "../../public/Assets/course image/pexels-anna-shvets-3987249@3x.png";
import  pexels_gabby from "../../public/Assets/course image/pexels-gabby-k-5331191@3x.png";
import  pexels_thirdman from "../../public/Assets/course image/pexels-thirdman-7257930_50-1@3x.png";
import  pexels_javier from "../../public/Assets/course image/pexels-javier-gonzalez-89625@3x.png";
import  post_sample from "../../public/Assets/course image/pexels-karolina-grabowska-4498294@3x.png";




const Courses = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>

        <Image  src={Rectangle_180}  className="img-fluid" alt="cover"></Image> 

        </div> 
       
        <section className="py-3 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light">Search among <span>58340</span> courses</h1>
      <p className="lead text-body-secondary">find your favorite course</p>
      
      <li className="search w-100 d-flex flex-row">
          <input type="text" className='search form-control bg-transparent  text-center rounded rounded-pill ' placeholder='search'/>
          <button
            className="btn btn-primary rounded-pill ml-2 mx-3"
            onClick={(e) => {
              e.preventDefault();
              // Handle search logic here
            }}
          >
            Search
          </button>
        </li> 
        
       
    </div>
  </div>
</section> 







<div className="container">

       

        
        
       
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
        <Card  title='Drawing' pra='intermediat' Image={course_imagex}/>  
        <Card title='Drawing' pra='intermediat' Image={pexels_gabby}/>
        <Card title='Drawing' pra='intermediat' Image={pexels_anna}/>
        <Card title='Drawing' pra='intermediat' Image={pexels_thirdman}/>
        <Card title='Drawing' pra='intermediat' Image={pexels_javier}/>
        <Card title='Drawing' pra='intermediat' Image={post_sample}/>


      
        
        

        
       
      </div> 


      
    </div> 
    </div>







        
        
   
  )
}

export default Courses