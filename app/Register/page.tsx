'use client';
import Link from 'next/link'
import React from 'react'
import "./Register.css"
import DeafultInput from '../Components/DeafultInput/Input'
import DeafultButton from '../Components/DeafultButton/DeafultButton'
import logo from "../../public/Assets/origami/origami3.png"
import google from "../../public/Assets/login/google.svg"
import facebook from "../../public/Assets/login/Facebook.svg"
import apple from "../../public/Assets/login/apple.svg"
import Image from 'next/image';


const Register = () => {
  
  return (
    <div className='container '>
      <div className='row'> 
      <div className='col-md-5 col-sm-12 p-5'> 
        <h3>Sign Up</h3>
        <p className=' mb-5 '>Alerady have an account? <Link className='Login-button' href={"/Login"}> Sign In </Link> </p>
        <div className='row'>
          <div className='col-6'>
          <DeafultInput label='First Name' type='text' />
          
           </div>
        <div className="col-6"> <DeafultInput label='Last Name' type='text'/> </div>
        </div>
        <form action="">
        <DeafultInput label='Email' type='Email'/>
        <DeafultInput label='Confirm Password' type='password'/>
        
        <DeafultInput label='Password' type='password'/>
        <div className='wraper-footer-form d-flex justify-content-between align-items-center'> 
        <div className='rememper-wraper d-flex'>   
        </div>
        </div>
        <DeafultButton text='Register'  
        width='100%'
        
        handleClick={ (e)=>{ 
          e.preventDefault();
          console.log(e.target);

        }} /> 
        </form>
        <div className='divider-social d-flex align-items-center'> 
        <div className='underline'></div> 
        <p className='m-0 mx-1 text-secondary'>or</p>  
        <div className='underline'></div> 
        </div>
        <div className="socail-media d-flex justify-content-center mt-2">
          <Link href={"#"}> <Image src={google} alt=''></Image> </Link>
          <Link href={"#"}> <Image src={facebook} alt='' className='mx-3'></Image> </Link>
          <Link href={"#"}> <Image src={apple} alt=''></Image> </Link>
        </div>
        </div>
        <div className=" order-first order-md-last col-md-6 d-flex flex-column justify-content-center align-items-center my-sm-4">
          <h2>Explore Our Courses Now</h2>
          
          <Image src={logo} width={150}  alt='a'/>
        </div>
        </div>
    </div>
  )
}

export default Register


