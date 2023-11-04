"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
// import origami from "../../../public/Assets/origami/origami.png"
import Image from "next/image";
import DeafultButton from "../DeafultButton/DeafultButton";

import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { navLinks } from "@/app/constants/Navlinks";
import Logo from "../Logo/Logo";


const Navbar = () => {

  // const router = useRouter(); 

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container hoby-nav">
          <Link className="navbar-brand" href="#">
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
                <Link className="nav-link active" href="#" aria-current="page">
                  
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

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
             {navLinks.map((item,index)=> <NavItem key={index} text={item} url={`/${item}`} /> )}
            
            </ul>
            <div className="nav-item">
              

            <Link href={"/Register"}>   <DeafultButton
                
                text="Sign in"
                handleClick={() => {
                window.location.href = "/Login";
                }}
                width="100px"
              /> </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
