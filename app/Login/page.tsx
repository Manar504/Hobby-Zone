'use client';
import Link from 'next/link'
import React from 'react'
import Register from '../Register/page'
import "./Login.css"
import DeafultInput from '../Components/DeafultInput/Input'
import DeafultButton from '../Components/DeafultButton/DeafultButton'
import logo from "../../public/Assets/origami/origami3.png"
import google from "../../public/Assets/login/google.svg"
import facebook from "../../public/Assets/login/Facebook.svg"
import apple from "../../public/Assets/login/apple.svg"
import Image from 'next/image';


const Login = () => {
  function x() {
    console.log("x+y");
  }
  return (
    <div className='container '>
      <div className='row '> 
      <div className='col-md-5 col-sm-12 p-5'> 
        <h3>Sign in</h3>
        <p className=' mb-5 '>Don't have an account ? <Link className='Login-button' href={"/Register"}> Sign Up </Link> </p>
        <form action="">
        <DeafultInput label='Email' type='Email'/>
        <DeafultInput label='Password' type='password'/>
        <div className='wraper-footer-form d-flex justify-content-between align-items-center'> 
        <div className='rememper-wraper d-flex'>
          <input type="checkbox"/>
        <p className='m-0 mx-1'>Rememper me</p>
        </div>
        <p className='m-0' > <Link href={"/forgetPassword"}>  forget your Password ?  </Link></p>
        </div>
        <DeafultButton text='LOGIN'  
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
        <div className="order-first order-md-last col-md-6 d-flex flex-column justify-content-center align-items-center my-sm-4">
          <h2>Welcome Back !</h2>
          <Image src={logo} width={150}  alt='a'/>
        </div>
        </div>
    </div>
  )
}

export default Login


