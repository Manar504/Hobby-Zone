import React from 'react'
import "./Navbar.css"
import { FaBeer ,  } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import logo from "../../../public/Assets/origami/origami3.png"
import Image from 'next/image';
import Profile from "../../../public/Assets/home tab/profile.svg"
import Notify from "../../../public/Assets/home tab/notifications.svg"
import bell from "../../../public/Assets/home tab/bell.svg"
import Link from 'next/link';



const Navbar = () => {
  return (
    <div>

       <nav className="navbar navbar-expand-sm navbar-light bg-light">
     <div className="container">
    <Link className="navbar-brand" href={"/"} > <Image src={logo} width={35} alt='Logo'/> </Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" href="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/pricing">Prices</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href="/About" aria-current="page">  About <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link  "  href="/Contact" aria-current="page">  Contact <span className="visually-hidden">(current)</span></Link>

        </li>
      </ul>
      <form className="d-flex my-2 w-50 me-auto my-lg-0">
        <input className="form-control me-sm-2  rounded-5" type="text" placeholder="Search for anything" />
        
      </form>
      <ul className="navbar-nav align-items-end mt-2  d-xs-inline">
      <li className="nav-item">
          
          <Image src={bell} alt='Notify' />
          
        </li>

        <li className="nav-item ms-3">
          
          <Image src={Profile} width={30} alt='profile' />
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

        

    </div>
  )
}

export default Navbar