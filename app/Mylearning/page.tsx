"use client"

import React from 'react'
import Card from '../Components/Card/Card';
import  course_imagex from "../../public/Assets/course image/course image@3x.png";
import  pexels_anna from "../../public/Assets/course image/pexels-anna-shvets-3987249@3x.png";
import  pexels_gabby from "../../public/Assets/course image/pexels-gabby-k-5331191@3x.png";
import  pexels_thirdman from "../../public/Assets/course image/pexels-thirdman-7257930_50-1@3x.png";
import  pexels_javier from "../../public/Assets/course image/pexels-javier-gonzalez-89625@3x.png";
import  post_sample from "../../public/Assets/course image/pexels-karolina-grabowska-4498294@3x.png";

const MyLearning = () => {
  return (
    <div>
       
        <section className="py-3 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto"> 
    <div className="ud-container"><h1 className="ud-heading-serif-xxxl app--page-title--1nCfO">My learning</h1></div>
      
      <p className="lead text-body-secondary">make learning a habit are more likely to reach their goals</p>
      
      
       
    </div>
  </div>
</section>  



<div className="container">

       

        
        
       
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
 {/* <Card  title='Drawing' pra='intermediat' Image={course_imagex} width="25%" />  
        <Card title='Drawing' pra='intermediat' Image={pexels_gabby} width="60%"/>
        <Card title='Drawing' pra='intermediat' Image={pexels_anna} width="15%"/>
        <Card title='Drawing' pra='intermediat' Image={pexels_thirdman} width="80%"/>
        <Card title='Drawing' pra='intermediat' Image={pexels_javier} width="100%"/>
        <Card title='Drawing' pra='intermediat' Image={post_sample} width="70%"/>

 

      
         */}
        

        
       
      </div> 


      
    </div> 
    </div>
  )
}

export default MyLearning;
