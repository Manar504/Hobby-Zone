"use client"

import React, { useEffect, useState } from 'react';
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
import teenager from "../../public/image 1.svg";
import playerIcon from "../../public/Assets/Group 4.svg";
import group from "../../public/Assets/Group 451.png";
import group1 from "../../public/Assets/Group 7.png";
import { DefaultContext } from 'react-icons';
import DeafultButton from '../Components/DeafultButton/DeafultButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../GlobalRedux/allcoursesSlice';
import KeenSlider from "../Components/EmplaCarousal/EmplaCarousal"
import Link from 'next/link'
import { useRouter } from 'next/navigation';



const Courses = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const courses = useSelector(state => state.courses);
  let myCourses = courses.data || [];
  useEffect(() => {
    dispatch(fetchCourses());

  }, []);
  const filteredCourses = myCourses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||  course.category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className='container-fluid'>
      
      <div className='row hero-row'>

        <div className='hero'>
          <Image alt='congrats' className='success-section' src={group} width={400} />          <div className='details'>
            <h3 className='content'> <span className='span' style={{ color: `orangered`, fontWeight: "bolder" }}>  Studying </span>Learning and
              teaching online,
              made easy.</h3>
            <p className='text-light '>Hobbies is an interesting platform that will teach you in more an interactive way</p>
            <div className='player-section d-flex'>
            <button className="custom-btn btn-8 m-0 "><span>Exploere Now</span></button>
            </div>
          </div>
          <div className='hero-image-courses'>
            <Image src={teenager} alt='teenager' width={450} className='' />
          </div>






        </div>


      </div>
      <h2 className='text-center my-3 fw-bolder '>Categories</h2>
      <KeenSlider  />
      <section className="py-3 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h2 className="fw-bold">Creativity
              Masterclass</h2>
            <p className="lead text-body-secondary">Find your favorite course</p>

            <li className="search w-100 d-flex flex-row justify-content-center">
              <div className="box">
                <div className="container-1 text-center col-12">
                  <span className="icon"> <i className="fa fa-search" /></span>
                  <input type="search"
              id="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
              </div>

              {/* <DeafultButton text='serch' bg='#491A85' color='white' width='100px' handleClick={
                () => {}
              } /> */}
            </li>



          </div>
        </div>
      </section>


              





      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
        {filteredCourses.map((course, index) => ( <> 
            <Card key={index} handleClick={ ()=> router.push(`/courses/${course.id}`)}  courseId={course.id} title={course.name} pra={course.category.name}  Image={course.image} />
            
            </>
          ))}
        </div>
            
            </div>
    </div>










  )
}

export default Courses