"use client"

import React from 'react';
import Card from '../Components/Card/Card';
import Image from 'next/image';
import Rectangle_180 from "../../public/Assets/course image/Rectangle 180.png";
import "./courses.css";
import course_imagex from "../../public/Assets/course image/course image@3x.png";
import pexels_anna from "../../public/Assets/course image/pexels-anna-shvets-3987249@3x.png";
import pexels_gabby from "../../public/Assets/course image/pexels-gabby-k-5331191@3x.png";
import pexels_thirdman from "../../public/Assets/course image/pexels-thirdman-7257930_50-1@3x.png";
import pexels_javier from "../../public/Assets/course image/pexels-javier-gonzalez-89625@3x.png";
import post_sample from "../../public/Assets/course image/pexels-karolina-grabowska-4498294@3x.png";
import Hero from '../Home/Hero/page';
import teenager from "../../public/Assets/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png";
import playerIcon from "../../public/Assets/Group 4.svg";
import group from "../../public/Assets/Group 451.png";
import group1 from "../../public/Assets/Group 7.png";
import { DefaultContext } from 'react-icons';
import DeafultButton from '../Components/DeafultButton/DeafultButton';




const Courses = () => {
  return (
    <div className='container-fluid'>
      <div className='row hero-row'>

        <div className='hero '>
            <Image alt='congrats' className='success-section' src={group}  width={400}/>          <div className='details'>
            <h3 className='content'> <span className='span' style={{ color: `orangered`, fontWeight: "bolder" }}>  Studying </span> Online is now much easier</h3>
            <p className='text-light '>Hobbies is an interesting platform that will teach you in more an interactive way</p>
            <div className='player-section d-flex'>
              <div className='join-btn text-light '> join class now</div>
              
             
              
            </div>


          </div>
          <div className='hero-image'>
            <Image src={teenager} alt='teenager' width={300} className='' />
          </div>






        </div>


      </div>

      <section className="py-3 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-medium">Search among <span>58340</span> courses</h1>
            <p className="lead text-body-secondary">find your favorite course</p>

            <li className="search w-100 d-flex flex-row ">
              <input type="text"  className='search  form-control mx-3 bg-transparent  text-center rounded rounded-pill ' placeholder='search'  />
             <DeafultButton   text='serch' bg='#491A85' color='white' width='100px' handleClick={
              ()=>{}
             }/>
            </li>


          </div>
        </div>
      </section>







      <div className="container">






          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
          <Card title='Drawing' pra='intermediat' Image={course_imagex} />
          <Card title='Drawing' pra='intermediat' Image={pexels_gabby} />
          <Card title='Drawing' pra='intermediat' Image={pexels_anna} />
          <Card title='Drawing' pra='intermediat' Image={pexels_thirdman} />
          <Card title='Drawing' pra='intermediat' Image={pexels_javier} />
          <Card title='Drawing' pra='intermediat' Image={post_sample} />








        </div>



      </div>
    </div>










  )
}

export default Courses