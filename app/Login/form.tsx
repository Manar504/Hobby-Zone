"use client"
import React, { FormEvent } from 'react'
import Link from "next/link";
import Register from "../Register/page";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import DeafultInput from "../Components/DeafultInput/Input";
import DeafultButton from "../Components/DeafultButton/DeafultButton";
import logo from "../../public/Assets/origami/origami3.png";
import google from "../../public/Assets/login/google.svg";
import facebook from "../../public/Assets/login/Facebook.svg";
import apple from "../../public/Assets/login/apple.svg";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import SecondaryButton from "../Components/SecondaryButton/secondaryButton";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
// import SigninButton from "../Components/GoogleSignInButton/SigninButton";
import { useRouter } from 'next/navigation';



const LoginForm = () => {
  async function handleGoogleSignIn() {
    signIn("google",{callbackUrl:"http://localhost:3000"})
  }
  const notify = () => toast.error("email or password not valid",);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (response?.status == 200) {
      router.push('/');
      router.refresh();
    } else {
      notify();
    }
  };
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-5 col-sm-12 p-5">
          <h3>Sign in</h3>
          <p className=" mb-5 ">
            Don not have an account ?{" "}
            <Link href="/Register">Sign Up</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <DeafultInput label="Email" type="Email" name={"email"} id={"email"} />
            <DeafultInput label="Password" type="password" name={"password"} id={"password"} />
            <div className="wraper-footer-form d-flex justify-content-between align-items-center">
              <div className="rememper-wraper d-flex">
                <input type="checkbox" />
                <p className="m-0 mx-1">Rememper me</p>
              </div>
              <p className="m-0">
                {" "}
                <Link href={"/ForgetPassword"}> forget your Password ? </Link>
              </p>
            </div>
            <DeafultButton navigate=''  text="Login" type='submit' bg='#491A85' color='white' />


          </form>
          <div className="divider-social d-flex align-items-center">
            <div className="underline"></div>
            <p className="m-0 mx-1 text-secondary">or</p>
            <div className="underline"></div>
          </div>
          <div className="socail-media d-flex justify-content-center mt-2">
           
              
              <Image src={google} style={{cursor:"pointer"}} alt="" onClick={handleGoogleSignIn}></Image>
            
            <Link href={"#"}>
              {" "}
              <Image src={facebook} alt="" className="mx-3"></Image>{" "}
            </Link>
            <Link href={"#"}>
              {" "}
              <Image src={apple} alt=""></Image>{" "}
            </Link>
          </div>
        </div>
        <div className="order-first order-md-last col-md-6 d-flex flex-column justify-content-center align-items-center my-sm-4">
          <h2>Welcome Back !</h2>
          <Image src={logo} width={150} alt="a" />
        </div>
      </div>
      <ToastContainer position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
      {/* <button onClick={()=> toast.success("NOT VALID")}>xxx</button> */}
    </div>
  );
}

export default LoginForm