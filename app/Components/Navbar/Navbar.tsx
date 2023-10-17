import React from 'react'
import "./Navbar.css"
import Link from 'next/link'; 
import origami from "../../../public/Assets/origami/origami.png"
import Image from 'next/image';


const Navbar = () => {
  return (
    <div>

       <nav className="navbar navbar-expand-sm navbar-dark">
     <div className="container">
    <Link className="navbar-brand" href="#"><Image src={origami} alt='hg' width={40} height={40}></Image></Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <ul className="navbar-nav  mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">   <span className="visually-hidden">(current)</span></a>
        </li>
       
        
        
      <form className="d-flex  my-lg-0">
        <input className="form-control me-sm-2 px-5 rounded-5" type="text" placeholder="Search anything" />
        
      </form> 
      </ul>
    <div className="collapse navbar-collapse" id="collapsibleNavId"> 
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" href="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Prices</a>
        </li> 
        
      </ul>
      
      
      
    </div>
  </div>
</nav>

        

    </div>
  )
}

export default Navbar