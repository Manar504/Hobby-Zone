import React from 'react'
import "./Navbar.css"
import { FaBeer ,  } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import pp from "../../favicon.ico";

const Navbar = () => {
  return (
    <div>

       <nav className="navbar navbar-expand-sm navbar-light bg-light">
     <div className="container">
    <a className="navbar-brand" href="#">Hobbies</a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Prices</a>
        </li>
      </ul>
      <form className="d-flex my-2 my-lg-0">
        <input className="form-control me-sm-2 rounded-5" type="text" placeholder="Search anything" />
        
      </form>
      <ul className="navbar-nav  mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">   <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
        
        </li>
        <li className="nav-item">
          <div className='image'> 
          <img className='profile-avatar'  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="aa" />
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        

    </div>
  )
}

export default Navbar