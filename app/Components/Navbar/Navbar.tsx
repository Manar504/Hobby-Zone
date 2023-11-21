// "use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
// import origami from "../../../public/Assets/origami/origami.png"
import Image from "next/image";
import DeafultButton from "../DeafultButton/DeafultButton";

import origami from "../../../public/Assets/origami/origami.png";
import MyLearning from './../../Mylearning/page';
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { navLinks } from "@/app/constants/Navlinks";
import Logo from "../Logo/Logo";
import { getServerSession } from "next-auth";
import SecondaryButton from "../SecondaryButton/secondaryButton";
import { signOut } from "next-auth/react";
import Logout from "../Logout/logout";
// import SigninButton from "../GoogleSignInButton/SigninButton";
// import ProvidersWrapper from "@/app/ProviderWrappers";

const session =  getServerSession();

type NavProps = {
  isAuthnticated? : boolean
}

const Navbar = async (props:NavProps) => {

  let listLinks = [...navLinks] ;
  
  // const router = useRouter(); 
  
  if(props.isAuthnticated == false ){
     listLinks = navLinks.filter(link=> link !== "courses" && link !=="profile" )
  }


  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark ">
        <div className="container hoby-nav">
          <Link className="navbar-brand" href="/">
           <Logo/>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" href="/" aria-current="page">
                  
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item search">
                <input
                  type="text"
                  className="search form-control bg-transparent text-light rounded rounded-pill "
                  placeholder="search"
                />
              </li>
            </ul>

            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
             {listLinks.map((item,index)=> <NavItem key={index} text={item} url={`/${item =="Home" ? "" : item}`} /> )}
              
            </ul>
            <div className="nav-item ms-auto  ">
            <div> 
        {props.isAuthnticated == false ?  <DeafultButton text="Login" navigate="\Login"/> :<Logout/>}
        {/* {props.isAuthnticated == true ?  } */}
        </div>
           
               
                 {/* <SigninButton/> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
