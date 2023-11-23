'use client';
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import "./Register.css"
import Joi from "joi";
import DeafultInput from '../Components/DeafultInput/Input'
import DeafultButton from '../Components/DeafultButton/DeafultButton'
import logo from "../../public/Assets/origami/origami3.png"
import google from "../../public/Assets/login/google.svg"
import facebook from "../../public/Assets/login/Facebook.svg"
import apple from "../../public/Assets/login/apple.svg"
import Image from 'next/image';
import router, { useRouter } from 'next/navigation';
import { registerUser } from '../utils/apiz';
import 'react-toastify/dist/ReactToastify.css';

import axios, { Axios } from 'axios';
import SecondaryButton from '../Components/SecondaryButton/secondaryButton';
import { ToastContainer, toast } from 'react-toastify';
const apiUrl = 'https://hobby-zone.kirellos.com/api/V1/';
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
      url : `https://hobby-zone.kirellos.com/api/V1/login`,
      headers : {
        "Accept": "application/json",
        
      },
      withCredentials:false,
      data : {
        // "phone": "01213215461121" ,
        "password": "88888888888888",
        // "name":"ZZZ",
        "email": " KKK@gmail.com" 
      },
    });

    console.log(response.data);
    

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

const Form = () => {

  const [erorrs, setErorrs] = useState([])
  






  const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {   e.preventDefault();  const notify = () => toast.error("Please fill in all required fields",);
  
        const formData = new FormData(e.currentTarget);
        if (!formData.get('username') || !formData.get('email') || !formData.get('password')) {
          // Display an error message or handle validation in your preferred way
          notify();
          console.error('Please fill in all required fields');
          return;
        }
        const response = await fetch(`/api/auth/register`, {
          method: 'POST',
          body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
          }),
        });
        console.log({ response });
    if (response?.status == 200) {
      router.push('/Login');
      router.refresh();
    } else {
      notify();
      
    }
      };



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

  const validateRegisterForm = () => {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(15),
      lastname: Joi.string().alphanum().min(3).max(15),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      Confirmpassword: Joi.ref('password'),
    });
    return schema.validate(formData, { abortEarly: false });
  };
  

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-5 col-sm-12 p-5'>
          <h3>Sign Up</h3>
          {/* {erorrs.map((err,i)=> <div key={i} className="alert bg-danger col-12 col-lg-9 col-xl-7 rounded-2 text-white "> {err.message} </div>)  }  */}
          <p className=' mb-5 '>Alerady have an account? <Link className='Login-button' href={"/Login"}> Sign In </Link> </p>
          <form  onSubmit={handleSubmit}>
            <div className='row'>

              <div className='col-6'>

                <DeafultInput label='First Name' type='text' name='username' id='username' onChange={handleInputChange}/>
              </div>

              <div className="col-6"> <DeafultInput onChange={handleInputChange} label='Last Name' type='text'  id='lastname' name='lastname'/> </div>
            </div>

            <DeafultInput label='Email' type='Email' id='email' name='email'  onChange={handleInputChange}/>
            <DeafultInput label='Password' type='password' name='password' id='password' onChange={handleInputChange}/>
            <DeafultInput label='Confirm Password' type='password'  id='Confirmpassword' name='Confirmpassword' onChange={handleInputChange}/>

           


            <div className='wraper-footer-form d-flex justify-content-between align-items-center'>
              <div className='rememper-wraper d-flex'>
              </div>
            </div>
            <DeafultButton  text='Register' navigate=''  type="submit"  bg='#491A85' color='white' width='100'/>
            

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
      <ToastContainer position="bottom-center"

      // transition={ true }
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </div>
  )
}

export default Form


