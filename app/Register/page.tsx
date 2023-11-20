'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import "./Register.css"
import DeafultInput from '../Components/DeafultInput/Input'
import DeafultButton from '../Components/DeafultButton/DeafultButton'
import logo from "../../public/Assets/origami/origami3.png"
import google from "../../public/Assets/login/google.svg"
import facebook from "../../public/Assets/login/Facebook.svg"
import apple from "../../public/Assets/login/apple.svg"
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import { registerUser } from '../utils/api';
import axios, { Axios } from 'axios';
import SecondaryButton from '../Components/SecondaryButton/secondaryButton';
const apiUrl = 'https://hobby-zone.kirellos.com/api/V1/register';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

 const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // registerUser(formData);
    // let response = await axios.post("https://hobby-zone.kirellos.com/api/V1/register",{
    //   "phone": "0121321546" ,
    //     "pssword": "88888888888888",
    //     "username":"ZZZ",
    //     "email": " KKK@gmail.com"
    // } , );

    // console.log(response.data);
    
    let response  =  await axios({
      method:"post" ,
      url : `${apiUrl}`,
      headers : {
        "Accept": "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      data : {
        "phone": "01213215461121" ,
        "password": "88888888888888",
        "username":"ZZZ",
        "email": " KKK@gmail.com" 
      },
    });

    // try {
    //   // Call the registerUser function with form data
    //   await registerUser(formData);
    //   // Redirect or perform other actions after successful registration
    //   router.push('/login');
    // } catch (error) {
    //   console.error('Registration failed', error);
    //   // Handle registration error
    // }
  };

const Register = () => {

  const [user , setUser] = useState();

  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

 
  

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-5 col-sm-12 p-5'>
          <h3>Sign Up</h3>
          <p className=' mb-5 '>Alerady have an account? <Link className='Login-button' href={"/Login"}> Sign In </Link> </p>
          <form action="">
            <div className='row'>

              <div className='col-6'>

                <DeafultInput label='First Name' type='text' name='username' id='username' onChange={handleInputChange}/>
              </div>

              <div className="col-6"> <DeafultInput onChange={handleInputChange} label='Last Name' type='text'  id='lastname' name='lastname'/> </div>
            </div>

            <DeafultInput label='Email' type='Email' id='email' name='email'  onChange={handleInputChange}/>
            <DeafultInput label='Confirm Password' type='password'  id='password' name='password' onChange={handleInputChange}/>

            <DeafultInput label='Password' type='password' name='password' id='password' onChange={handleInputChange}/>


            <div className='wraper-footer-form d-flex justify-content-between align-items-center'>
              <div className='rememper-wraper d-flex'>
              </div>
            </div>
            <SecondaryButton text='Register'  />
            <button onClick={handleRegister}>Test</button>

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

          <Image src={logo} width={150} alt='a' />
        </div>
      </div>
    </div>
  )
}

export default Register


